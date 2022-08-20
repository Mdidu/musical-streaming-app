import { useEffect, useState } from "react";
import styles from "./progress.module.css";
const dureeTotal = 100;
export function ProgressComponent() {
  const [isListen, setListen] = useState(true);
  const [isListeningPercentage, setListeningPercentage] = useState(0);

  let dureeEcoulee = 0;

  // Déclenche le setInterval au chargement
  useEffect(() => {
    if (isListen) {
      setInterval(() => {
        dureeEcoulee += 1;
        // Définie et met à jour l'avancement dans la musique
        setListeningPercentage((dureeEcoulee / dureeTotal) * 100);
      }, 1000);
    }
  }, []);

  // Ecrire une function pour convertir isListeningPercentage et dureeTotal au format XX:XX

  /**
   * Doit savoir si la musique est en cours d'écoute ou pas
   * Doit avoir la durée de la musique et le temps écoulé
   * isListeningPercentage doit être la valeur width de la class progress
   * Doit avoir le moment où l'on est à gauche et la durée totale à droite
   * Doit pouvoir sélectionner ou l'on veut être dans la musique en cliquant sur la barre
   *  */
  return (
    <span>
      {isListeningPercentage}
      <span className={styles.progress_bar}>
        <div className={styles.progress}></div>
      </span>
    </span>
  );
}
