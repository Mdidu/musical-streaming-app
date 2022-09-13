import {
  DAILY_RECOMMENDATION,
  POPULAR_RELEASE,
} from "../../utilities/constantes-conditional-text";

export const selectRecommendation = (state) => state.recommendation;

export const selectDailyRecommendations = (state) =>
  state.recommendation.dailyRecommendations;

export const selectPopularRelease = (state) =>
  state.recommendation.popularRelease;

export const selectSelectedRecommendation = (state) => {
  const recommendationState = state.recommendation;
  switch (recommendationState.selectedRecommendationType) {
    case POPULAR_RELEASE:
      return recommendationState.popularRelease;
    case DAILY_RECOMMENDATION:
      return recommendationState.dailyRecommendations;
    default:
      break;
  }
};
