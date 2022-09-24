import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAllDailyRecommendations,
  fetchAllPopularRelease,
} from "../../service/recommendation/recommendation-service";
import {
  loadDailyRecommendations,
  loadPopularRelease,
  selectedRecommendationType,
} from "./recommendation.action";

const initialState = {
  dailyRecommendations: null,
  popularRelease: null,
  selectedRecommendationType: null,
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
    })
    .addCase(selectedRecommendationType, (state, action) => {
      state.selectedRecommendationType = action.payload.typeRecommendation;
      return state;
    });
});
