import { configureStore } from "@reduxjs/toolkit";

// le state et le reducer seront déplacé dans un autre fichier plus tard
const initialState = {
  playlistName: 0,
  nbMusic: 0,
  playing: false,
};

function playlistReducer(state = initialState, action) {
  if (action.type === "restart") {
    return initialState;
  }
  return state;
}

export const store = configureStore({
  reducer: {
    playlistReducer,
  },
});
/**
 * Stocker les "musiques" en local pour pouvoir les lire (Non urgent)
 * Créer un lecteur de musique
 * Créer un système de playlist (ajout/suppression/modification) Pour la modif ce serait l'ordre des musiques
 * Créer un écran de choix de musique / artiste (comme spotify)
 * Créer une search bar pour rechercher un artiste / une musique ?
 * Créer un faux système de log
 */
