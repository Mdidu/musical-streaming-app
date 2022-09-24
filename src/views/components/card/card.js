import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ALBUM,
  ARTIST,
  PLAYLIST,
} from "../../../utilities/constantes-conditional-text";
import {
  ALBUM_PATH,
  ARTIST_PATH,
  PLAYLIST_PATH,
} from "../../../utilities/constantes-path";
import {
  TEST_CARD_PLAYER_PAUSE,
  TEST_SVG_COMPONENT,
} from "../../../utilities/constantes-testid";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import styles from "./card.module.css";

const determinePath = (value) => {
  switch (value.toLowerCase()) {
    case ALBUM:
      return ALBUM_PATH;
    case ARTIST:
      return ARTIST_PATH;
    case PLAYLIST:
      return PLAYLIST_PATH;
    default:
      break;
  }
};

export function CardComponent(props) {
  const [isListen, setIsListen] = useState(false);
  const { key, imagePath, descriptionImage, title, description, type } =
    props.cardValue;
  const path = determinePath(type);

  const listenComponent = isListen ? (
    <SvgPause data-testid={TEST_CARD_PLAYER_PAUSE} />
  ) : (
    <SvgPlay />
  );

  const onClickReader = (e) => {
    e.preventDefault();
    setIsListen(!isListen);
  };

  return (
    <div className={styles.card}>
      <Link to={`${path}/${key}`}>
        <div className={styles.card_img_svg}>
          <img
            className={styles.card_img}
            src={imagePath}
            alt={descriptionImage}
            width="200"
            height="200"
          />
          <span
            className={styles.card_player}
            data-testid={TEST_SVG_COMPONENT}
            onClick={onClickReader}
          >
            {listenComponent}
          </span>
        </div>
        <p className={styles.card_main_text}>{title}</p>
        <p className={styles.card_sub_text}>{description}</p>
      </Link>
    </div>
  );
}
