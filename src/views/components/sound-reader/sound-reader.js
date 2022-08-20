import { useState } from "react";
import { SvgNext } from "../../icons/Next";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import { SvgPrevious } from "../../icons/Previous";
import { SvgRandomPlayback } from "../../icons/RandomPlayback";
import { SvgRepeat } from "../../icons/Repeat";
import { ProgressComponent } from "../progress/progress";
import styles from "./sound-reader.module.css";

export function SoundReaderComponent() {
  const [isListen, setIsListen] = useState(false);

  const listenComponent = isListen ? (
    <SvgPause data-testid="player-pause" />
  ) : (
    <SvgPlay data-testid="player-play" />
  );

  const onClickRandomPlayback = () => {
    // call le store pour exécuter l'action
  };
  const onClickPrevious = () => {
    // call le store pour exécuter l'action
  };
  const onClickReader = () => {
    // call le store pour exécuter l'action
    setIsListen(!isListen);
  };
  const onClickNext = () => {
    // call le store pour exécuter l'action
  };
  const onClickRepeat = () => {
    // call le store pour exécuter l'action
  };

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
          <SvgRepeat />
        </span>
      </div>
      <ProgressComponent />
    </div>
  );
}
