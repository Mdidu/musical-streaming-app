import dailyRecommendationsList from "../../data/daily-recommendation.json";
import popularReleaseList from "../../data/popular-release.json";

export function fetchAllDailyRecommendations() {
  return dailyRecommendationsList;
}

export function fetchAllPopularRelease() {
  return popularReleaseList;
}


/* 
  Voir tout -> Amène à un écran où l'on voit toutes les cartes de la liste
  Cliquer sur une carte amène soit :
  -> Ecran de la musique
  -> Ecran de l'album
*/