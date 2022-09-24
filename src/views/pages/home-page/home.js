import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadDailyRecommendations,
  loadPopularRelease,
} from "../../../stores/recommendation/recommendation.action";
import {
  selectDailyRecommendations,
  selectPopularRelease,
} from "../../../stores/recommendation/recommendation.selector";
import {
  DAILY_RECOMMENDATION_PATH,
  POPULAR_RELEASE_PATH,
} from "../../../utilities/constantes-path";
import {
  TITLE_DAILY_RECOMMENDATION,
  TITLE_POPULAR_RELEASE,
} from "../../../utilities/constantes-ui-text";
import RecommendationComponent from "../../components/recommendation/recommendation";
import "./home.css";

export function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularRelease());
    dispatch(loadDailyRecommendations());
  }, [dispatch]);

  const listePopularRelease = useSelector(selectPopularRelease) ?? [];
  const listRecommendation = useSelector(selectDailyRecommendations) ?? [];

  return (
    <div>
      <RecommendationComponent
        title={TITLE_POPULAR_RELEASE}
        titleList={listePopularRelease}
        linkPath={POPULAR_RELEASE_PATH}
      />
      <RecommendationComponent
        title={TITLE_DAILY_RECOMMENDATION}
        titleList={listRecommendation}
        linkPath={DAILY_RECOMMENDATION_PATH}
      />
    </div>
  );
}
