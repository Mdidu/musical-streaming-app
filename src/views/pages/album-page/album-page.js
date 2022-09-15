import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadOneAlbum } from "../../../stores/album/album.action";
import { selectOneAlbum } from "../../../stores/album/album.selector";
import {
  TEST_CARD_PLAYER_PAUSE,
  TEST_SVG_COMPONENT,
} from "../../../utilities/constantes-testid";

import AlbumArrayComponent from "../../components/album-array/album-array";
import HeaderContentComponent from "../../components/header-content/header-content";
import { SvgEmptyLike } from "../../icons/EmptyLike";
import { SvgFullLike } from "../../icons/FullLike";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import { SvgPointTriple } from "../../icons/PointTriple";
import styles from "./album-page.module.css";

function AlbumPage() {
  const [isListen, setIsListen] = useState(false);
  const [isSaveLibrary, setIsSaveLibrary] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const album = useSelector(selectOneAlbum);

  useEffect(() => {
    dispatch(loadOneAlbum({ id: id }));
  }, [dispatch, id]);

  const onClickReader = (e) => {
    e.preventDefault();
    setIsListen(!isListen);
  };

  const onClickSaveLibrary = () => {
    setIsSaveLibrary(!isSaveLibrary);
  };

  const listenComponent = isListen ? (
    <SvgPause data-testid={TEST_CARD_PLAYER_PAUSE} />
  ) : (
    <SvgPlay />
  );

  const likeComponent = isSaveLibrary ? (
    <SvgFullLike onClick={onClickSaveLibrary} viewBox="0 0 24 24" width="48" />
  ) : (
    <SvgEmptyLike onClick={onClickSaveLibrary} viewBox="0 0 24 24" width="48" />
  );

  return (
    <div className={styles.album_page}>
      {album ? <HeaderContentComponent data={album} /> : <></>}
      {/* Button block */}
      <div className={styles.album_page_buttons}>
        <span
          className={styles.card_player}
          data-testid={TEST_SVG_COMPONENT}
          onClick={onClickReader}
        >
          {listenComponent}
        </span>
        <span className={styles.album_page_button_svg}>{likeComponent}</span>
        <span className={styles.album_page_button_point_triple}>
          <SvgPointTriple />
        </span>
      </div>
      {/* Array block */}
      {album ? <AlbumArrayComponent songs={album.songs} /> : <></>}
    </div>
  );
}

export default AlbumPage;
