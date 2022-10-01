import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadOneArtist } from "../../../stores/artist/artist.action";
import { selectOneArtist } from "../../../stores/artist/artist.selector";
import {
  loadAlbumIsListen,
  updateIsListen,
} from "../../../stores/main-reader/main-reader.action";
import { selectIsListen } from "../../../stores/main-reader/main-reader.selector";
import { displayModal } from "../../../stores/modal/modal.action";
import {
  TEST_CARD_PLAYER_PAUSE,
  TEST_SVG_COMPONENT,
} from "../../../utilities/constantes-testid";
import {
  ADD_TO_LIBRARY,
  DELETE_TO_LIBRARY,
} from "../../../utilities/constantes-ui-text";
import HeaderArtistComponent from "../../components/header-artist/header-artist";
import { SvgEmptyLike } from "../../icons/EmptyLike";
import { SvgFullLike } from "../../icons/FullLike";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import { SvgPointTriple } from "../../icons/PointTriple";
import styles from "./artist-page.module.css";

function ArtistPage() {
  const [isListen, setIsListen] = useState(false);
  const [isSaveLibrary, setIsSaveLibrary] = useState(false);
  const [saveLibraryButtonAlreadyClick, setSaveLibraryButtonAlreadyClick] =
    useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const artist = useSelector(selectOneArtist);
  // const modal = useSelector(selectModal);
  const reduxStateIsListen = useSelector(selectIsListen);
  let albumAlreadyLoadedInState = false;

  console.log(artist);

  useEffect(() => {
    dispatch(loadOneArtist({ id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (saveLibraryButtonAlreadyClick && isSaveLibrary)
      dispatch(displayModal({ text: ADD_TO_LIBRARY }));
    else if (saveLibraryButtonAlreadyClick && !isSaveLibrary)
      dispatch(displayModal({ text: DELETE_TO_LIBRARY }));
  }, [isSaveLibrary, saveLibraryButtonAlreadyClick, dispatch]);

  useEffect(() => {
    setIsListen(reduxStateIsListen);
  }, [reduxStateIsListen]);

  const onClickReader = (e) => {
    e.preventDefault();
    if (!albumAlreadyLoadedInState) {
      albumAlreadyLoadedInState = true;
      dispatch(loadAlbumIsListen({ id }));
    }

    dispatch(updateIsListen({ isListen: !isListen }));
  };

  const onClickSaveLibrary = () => {
    setSaveLibraryButtonAlreadyClick(true);
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
      {artist && <HeaderArtistComponent data={artist} />}
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
      {/* {album ? <AlbumArrayComponent songs={album.songs} /> : <></>}
      {modal.isShowing ? <Modal /> : <></>} */}
    </div>
  );
}

export default ArtistPage;
