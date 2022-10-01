import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadArtistSongIsListen,
  updateIsListen,
  updateSongId,
} from "../../../stores/main-reader/main-reader.action";
import { selectMainReader } from "../../../stores/main-reader/main-reader.selector";
import { displayModal } from "../../../stores/modal/modal.action";
import { TEST_CARD_PLAYER_PAUSE } from "../../../utilities/constantes-testid";
import {
  ADD_TO_TITLE_LIKED,
  DELETE_TO_TITLE_LIKED,
} from "../../../utilities/constantes-ui-text";
import { getTime } from "../../../utilities/tools";
import { SvgEmptyLike } from "../../icons/EmptyLike";
import { SvgFullLike } from "../../icons/FullLike";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import styles from "./artist-array-rows.module.css";

function ArtistArrayRowComponent(props) {
  const song = props.song;
  let artistSongAlreadyLoadedInState = false;

  const [isListen, setIsListen] = useState(false);
  const [isSaveLiked, setIsSaveLiked] = useState(false);
  const [saveLikedButtonAlreadyClick, setSaveLikedButtonAlreadyClick] =
    useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isListen: reduxStateIsListen, songId } =
    useSelector(selectMainReader);

  useEffect(() => {
    if (saveLikedButtonAlreadyClick && isSaveLiked)
      dispatch(displayModal({ text: ADD_TO_TITLE_LIKED }));
    else if (saveLikedButtonAlreadyClick && !isSaveLiked)
      dispatch(displayModal({ text: DELETE_TO_TITLE_LIKED }));
  }, [isSaveLiked, saveLikedButtonAlreadyClick, dispatch]);

  useEffect(() => {
    setIsListen(reduxStateIsListen);
  }, [reduxStateIsListen]);

  /** EVENT FUNCTIONS */
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const onClickReader = (e) => {
    e.preventDefault();
    if (!artistSongAlreadyLoadedInState) {
      artistSongAlreadyLoadedInState = true;
      dispatch(updateSongId({ songId: song.id }));
      dispatch(loadArtistSongIsListen({ id }));
    }

    dispatch(updateIsListen({ isListen: !isListen }));
  };

  const onClickSaveLiked = () => {
    setSaveLikedButtonAlreadyClick(true);
    setIsSaveLiked(!isSaveLiked);
  };

  /** CONDITIONNAL COMPONENTS */
  const listenComponent =
    isListen && song.id === songId ? (
      <SvgPause data-testid={TEST_CARD_PLAYER_PAUSE} />
    ) : (
      <SvgPlay />
    );
  const likeComponent = isSaveLiked ? (
    <SvgFullLike onClick={onClickSaveLiked} width="16" height="16" />
  ) : (
    <SvgEmptyLike onClick={onClickSaveLiked} width="16" height="16" />
  );

  const numberOrReader = isHovering ? (
    <div onClick={onClickReader}>{listenComponent}</div>
  ) : (
    <div>{song.id + 1}</div>
  );

  const titleColumn = (
    <div className={styles.artist_row_content_title}>
      <div>{song.title}</div>
      <div>
        {song.nbViews}
        {isHovering ? <span>{likeComponent}</span> : <></>}
      </div>
    </div>
  );

  return (
    <div
      key={song.id}
      className={styles.artist_row_content}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {numberOrReader}
      {titleColumn}
      <div>{getTime(song.duration)}</div>
    </div>
  );
}

export default ArtistArrayRowComponent;
