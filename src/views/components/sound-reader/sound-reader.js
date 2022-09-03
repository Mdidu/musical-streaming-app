import { useEffect, useRef, useState } from "react";
import { SvgMuted } from "../../icons/Muted";
import { SvgNext } from "../../icons/Next";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import { SvgPrevious } from "../../icons/Previous";
import { SvgRandomPlayback } from "../../icons/RandomPlayback";
import { SvgRepeat } from "../../icons/Repeat";
import { SvgVolume } from "../../icons/Volume";
import Mp3 from "./ReadAllOver-NathanMoore.mp3";
import styles from "./sound-reader.module.css";

export function SoundReaderComponent() {
  /** HOOKS */
  const [isListen, setIsListen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.loop = isLoop;
  }, [isLoop]);

  useEffect(() => {
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  /** CONSTANTES */
  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  /** EVENT FUNCTIONS */
  const onClickRandomPlayback = () => {
    // call le store pour exécuter l'action
  };
  const onClickPrevious = () => {
    // call le store pour exécuter l'action
  };
  const onClickReader = () => {
    !isListen ? audioRef.current.play() : audioRef.current.pause();

    // call le store pour exécuter l'action
    setIsListen(!isListen);
    // audioRef.current.muted()
  };
  const onClickNext = () => {
    // call le store pour exécuter l'action
  };
  const onClickRepeat = () => {
    setIsLoop((isLoop) => !isLoop);
  };
  const onClickMuted = () => {
    setIsMuted((isMuted) => !isMuted);
  };
  const onChangeVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
    audioRef.current.volume === 0 ? setIsMuted(true) : setIsMuted(false);
  };

  const timeUpdateHandler = (e) => {
    // Update song state from audio html properties
    setSongInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });

    if (!isLoop && audioRef.current.currentTime === audioRef.current.duration)
      setIsListen(!isListen);
  };

  /** FUNCTIONS */
  const getTime = (time) => {
    // Format time from sec to min : sec
    let minutes = Math.floor(time / 60);
    let seconds = ("0" + Math.floor(time % 60)).slice(-2);
    return minutes + ":" + seconds;
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  /** CONDITIONAL COMPONENT DISPLAY ACCORDING TO STATE */
  const listenComponent = isListen ? (
    <SvgPause data-testid="player-pause" />
  ) : (
    <SvgPlay data-testid="player-play" />
  );

  const volumeComponent = isMuted ? (
    <SvgMuted data-testid="player-muted" onClick={onClickMuted} />
  ) : (
    <SvgVolume data-testid="player-volume" onClick={onClickMuted} />
  );

  return (
    <div id={styles.sound_reader}>
      <div id={styles.sound_reader_btns}>
        <span data-testid="random-playback" onClick={onClickRandomPlayback}>
          <SvgRandomPlayback />
        </span>
        <span data-testid="previous" onClick={onClickPrevious}>
          <SvgPrevious />
        </span>
        <span data-testid="reader" onClick={onClickReader}>
          {listenComponent}
        </span>
        <span data-testid="next" onClick={onClickNext}>
          <SvgNext />
        </span>
        <span data-testid="repeat" onClick={onClickRepeat}>
          <SvgRepeat className={isLoop ? styles.sound_reader_active : ''} />
        </span>
        <span className={styles.sound_reader_volume}>
          {volumeComponent}
          <span className={styles.sound_reader_volume_slider}>
            <input
              className={styles.volume}
              data-testid="volume"
              type="range"
              min={0}
              max={100}
              defaultValue={100}
              onChange={onChangeVolume}
            />
          </span>
        </span>
      </div>

      <audio
        controls
        src={Mp3}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        hidden
      />

      <div className={styles.time_control}>
        <p>{getTime(songInfo.currentTime)}</p>
        <div className={styles.track}>
          <input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <div
            className={styles.animate_track}
            style={{
              transform: `translateX(${animationPercentage}%)`,
            }}
          ></div>
        </div>

        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
    </div>
  );
}
