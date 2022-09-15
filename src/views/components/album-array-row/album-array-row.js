import { useState } from "react";
import { TEST_CARD_PLAYER_PAUSE } from "../../../utilities/constantes-testid";
import { SvgEmptyLike } from "../../icons/EmptyLike";
import { SvgFullLike } from "../../icons/FullLike";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import styles from "./album-array-row.module.css";

function AlbumArrayRowComponent(props) {
  const song = props.song;
  const [isListen, setIsListen] = useState(false);
  const [isSaveLiked, setIsSaveLiked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  /** EVENT FUNCTIONS */
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const onClickReader = (e) => {
    e.preventDefault();
    setIsListen(!isListen);
  };

  const onClickSaveLiked = () => {
    setIsSaveLiked(!isSaveLiked);
  };

  /** CONDITIONNAL COMPONENTS */
  const listenComponent = isListen ? (
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
    <div className={styles.album_row_content_title}>
      {song.title}
      {isHovering ? <span>{likeComponent}</span> : <></>}
    </div>
  );

  return (
    <div
      key={song.id}
      className={styles.album_row_content}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {numberOrReader}
      {titleColumn}
      <div>3:01</div>
    </div>
  );
}

export default AlbumArrayRowComponent;
