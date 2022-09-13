import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadDailyRecommendations,
  loadPopularRelease,
  selectedRecommendationType,
} from "../../stores/recommendation/recommendation.action";
import { selectSelectedRecommendation } from "../../stores/recommendation/recommendation.selector";
import {
  TITLE_DAILY_RECOMMENDATION,
  TITLE_POPULAR_RELEASE,
} from "../../utilities/constantes-ui-text";
import { CardComponent } from "../components/card/card";
import styles from "./recommendation-page.module.css";

function RecommendationPage() {
  const [title, setTitle] = useState("");
  const { type } = useParams();
  const dispatch = useDispatch();
  let listRecommendation;

  useEffect(() => {
    switch (type) {
      case "popular-release":
        setTitle(TITLE_POPULAR_RELEASE);
        dispatch(loadPopularRelease());
        dispatch(selectedRecommendationType({ typeRecommendation: type }));
        break;
      case "daily-recommendation":
        setTitle(TITLE_DAILY_RECOMMENDATION);
        dispatch(loadDailyRecommendations());
        dispatch(selectedRecommendationType({ typeRecommendation: type }));
        break;
      default:
        // envoyer vers la page not found
        break;
    }
  }, [dispatch, type, title]);

  listRecommendation = useSelector(selectSelectedRecommendation) ?? [];

  const recommendations = listRecommendation.map((recommendation) => (
    <CardComponent key={recommendation.key} cardValue={recommendation} />
  ));
  return (
    <div className={styles.recommendation_page}>
      <h1>{title}</h1>
      <div>{recommendations}</div>
    </div>
  );
}

export default RecommendationPage;
