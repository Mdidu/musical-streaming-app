import { configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "./album/album.reducer";
import { ADD_MAIN_READER_REF } from "./main-reader/main-reader.constante";
import { mainReaderReducer } from "./main-reader/main-reader.reducer";
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
    mainReader: mainReaderReducer,
    recommendation: recommendationReducer,
    album: albumReducer,
    playlist: playlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [ADD_MAIN_READER_REF],
        // Ignore these paths in the state
        ignoredPaths: ["mainReader.audioRef"],
      },
    }),
});
