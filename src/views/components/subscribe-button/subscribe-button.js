import { useState } from "react";
import { TEST_SUBSCRIBE_BUTTON } from "../../../utilities/constantes-testid";
import styles from "./subscribe-button.module.css";

const SUBSCRIBE_TXT = "S'abonner";
const SUBSCRIBER_TXT = "Abonné";

export function SubscribeButtonComponent() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const txt = isSubscribed ? SUBSCRIBER_TXT : SUBSCRIBE_TXT;
  return (
    <button
      data-testid={TEST_SUBSCRIBE_BUTTON}
      className={styles.subscribe_btn}
      onClick={() => {
        setIsSubscribed(!isSubscribed);
      }}
    >
      {txt}
    </button>
  );
}
