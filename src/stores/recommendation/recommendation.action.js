import { createAction } from "@reduxjs/toolkit";
import {
  LOAD_DAILY_RECOMMENDATION,
  LOAD_POPULAR_RELEASE,
  SELECTED_RECOMMENDATION_TYPE,
} from "./recommendation.constante";

export const loadDailyRecommendations = createAction(LOAD_DAILY_RECOMMENDATION);
export const loadPopularRelease = createAction(LOAD_POPULAR_RELEASE);
export const selectedRecommendationType = createAction(
  SELECTED_RECOMMENDATION_TYPE
);
