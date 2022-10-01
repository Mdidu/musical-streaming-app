import { createReducer } from "@reduxjs/toolkit";
import { fetchOneArtist } from "../../service/artist/artist-service";
import { loadOneArtist } from "./artist.action";

const initialState = {
  selectedArtist: null,
};

export const artistReducer = createReducer(initialState, (builder) => {
  return builder.addCase(loadOneArtist, (state, action) => {
    state.selectedArtist = fetchOneArtist(action.payload.id);
    return state;
  });
});
