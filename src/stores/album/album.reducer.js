import { createReducer } from "@reduxjs/toolkit";
import { fetchOneAlbum } from "../../service/album/album-service";
import { loadOneAlbum } from "./album.action";

const initialState = {
  listAlbum: null,
  selectedAlbum: null,
};

export const albumReducer = createReducer(initialState, (builder) => {
  return builder.addCase(loadOneAlbum, (state, action) => {
    state.selectedAlbum = fetchOneAlbum(action.payload.id);
    return state;
  });
});
