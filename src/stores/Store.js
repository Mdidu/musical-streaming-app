import { configureStore } from "@reduxjs/toolkit";
import { recommendationReducer } from "./recommendation/recommendation.reducer";

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
    recommendation: recommendationReducer,
    playlist: playlistReducer,
  },
});
