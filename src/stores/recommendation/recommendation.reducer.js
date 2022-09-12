import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAllDailyRecommendations,
  fetchAllPopularRelease,
} from "../../service/recommendation/recommendation-service";
import {
  loadDailyRecommendations,
  loadPopularRelease,
} from "./recommendation.action";

const initialState = {
  dailyRecommendations: null,
  popularRelease: null,
};

export const recommendationReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(loadDailyRecommendations, (state) => {
      const dailyRecommendations = fetchAllDailyRecommendations();
      state.dailyRecommendations = dailyRecommendations;
      return state;
    })
    .addCase(loadPopularRelease, (state) => {
      const popularRelease = fetchAllPopularRelease();
      state.popularRelease = popularRelease;
      return state;
    });
});
