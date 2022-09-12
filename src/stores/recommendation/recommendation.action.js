import { createAction } from "@reduxjs/toolkit";
import {
  LOAD_DAILY_RECOMMENDATION,
  LOAD_POPULAR_RELEASE,
} from "./recommendation.constante";

export const loadDailyRecommendations = createAction(LOAD_DAILY_RECOMMENDATION);
export const loadPopularRelease = createAction(LOAD_POPULAR_RELEASE);
