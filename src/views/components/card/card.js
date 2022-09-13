import { useState } from "react";
import { TEST_CARD_PLAYER_PAUSE, TEST_SVG_COMPONENT } from "../../../utilities/constantes-testid";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import styles from "./card.module.css";

export function CardComponent(props) {
  const [isListen, setIsListen] = useState(false);

  const listenComponent = isListen ? (
    <SvgPause data-testid={TEST_CARD_PLAYER_PAUSE} />
  ) : (
    <SvgPlay />
  );

  const onClickReader = () => setIsListen(!isListen);

  return (
    <div className={styles.card}>
      <div className={styles.card_img_svg}>
        <img
          className={styles.card_img}
          src={props.imagePath}
          alt={props.descriptionImage}
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
      <p className={styles.card_main_text}>{props.title}</p>
      <p className={styles.card_sub_text}>{props.description}</p>
    </div>
  );
}
