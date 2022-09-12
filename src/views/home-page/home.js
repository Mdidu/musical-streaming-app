import { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  loadDailyRecommendations,
  loadPopularRelease,
} from "../../stores/recommendation/recommendation.action";
import {
  selectDailyRecommendations,
  selectPopularRelease,
} from "../../stores/recommendation/recommendation.selector";
import RecommendationComponent from "../components/recommendation/recommendation";
import "./home.css";

export function HomePage() {
  const store = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularRelease());
    dispatch(loadDailyRecommendations());
  }, [store, dispatch]);

  const listePopularRelease = useSelector(selectPopularRelease) ?? [];
  const listRecommendation = useSelector(selectDailyRecommendations) ?? [];

  return (
    <div>
      <RecommendationComponent
        title="Dernières sorties populaires !"
        titleList={listePopularRelease}
        linkPath="/popular-release"
      />
      <RecommendationComponent
        title="A ne pas manquer aujourd'hui !"
        titleList={listRecommendation}
        linkPath="/daily-recommendation"
      />
    </div>
  );
}
