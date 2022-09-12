import dailyRecommendationsList from "../../data/daily-recommendation.json";
import popularReleaseList from "../../data/popular-release.json";

export function fetchAllDailyRecommendations() {
  console.log("aaaaaaaa");
  return dailyRecommendationsList;
}

export function fetchAllPopularRelease() {
  return popularReleaseList;
}
