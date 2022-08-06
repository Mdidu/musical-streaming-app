import { useState } from "react";
import logoPlay from "../../../assets/bouton-jouer.png";
import logoPause from "../../../assets/pause.png";
import styles from "./card.module.css";

function CardComponent(props) {
  const [isListen, setIsListen] = useState(false);

  const logo = isListen ? logoPause : logoPlay;

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
          onClick={() => setIsListen(!isListen)}
        >
          <img src={logo} width="20" height="20" alt="player icon" />
        </span>
      </div>
      <p className={styles.card_main_text}>{props.title}</p>
      <p className={styles.card_sub_text}>{props.description}</p>
    </div>
  );
}

export default CardComponent;
