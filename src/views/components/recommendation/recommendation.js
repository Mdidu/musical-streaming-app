import { Link } from "react-router-dom";
import { CardComponent } from "../card/card";
import styles from "./recommendation.module.css";

export function RecommendationComponent(props) {
  const cardList = props.titleList.map((title) => (
    <CardComponent
      key={title.key}
      imagePath={title.imagePath}
      descriptionImage={title.descriptionImage}
      title={title.title}
      description={title.description}
    />
  ));
  return (
    <section>
      <span className={styles.recommandation_category}>
        <h2>
          <Link to={props.linkPath}>{props.title}</Link>
        </h2>
        <Link to={props.linkPath}>Voir tout</Link>
      </span>
      <div className={styles.recommandation_card_list}>{cardList}</div>
    </section>
  );
}

export default RecommendationComponent;
