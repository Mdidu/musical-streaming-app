import { useState } from "react";
import { SvgPause } from "../../icons/Pause";
import { SvgPlay } from "../../icons/Play";
import styles from "./card.module.css";

export const CardComponent = (props) => {
  const [isListen, setIsListen] = useState(false);

  const svgComponent = isListen ? <SvgPause data-testid="card-player-pause" /> : <SvgPlay />;

  const onClickReader = () => setIsListen(!isListen);

  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles.card_img}
          src={props.imagePath}
          alt={props.descriptionImage}
          width="200"
          height="200"
        />
        <span
          className={styles.card_player}
          data-testid="svgComponent"
          onClick={onClickReader}
        >
          {svgComponent}
        </span>
      </div>
      <p className={styles.card_main_text}>{props.title}</p>
      <p className={styles.card_sub_text}>{props.description}</p>
    </div>
  );
};
