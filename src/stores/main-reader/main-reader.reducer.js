import { createReducer } from "@reduxjs/toolkit";
import { fetchOneAlbum } from "../../service/album/album-service";
import { fetchOneArtistPopularSong } from "../../service/artist/artist-service";
import {
  addMainReaderRef,
  loadAlbumIsListen,
  loadArtistSongIsListen,
  loadMainReaderRef,
  updateIsListen,
  updateSongId,
} from "./main-reader.action";

const initialState = {
  isListen: false,
  audioRef: null,
  selectedAlbum: null,
  songId: null,
};

export const mainReaderReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(addMainReaderRef, (state, action) => {
      state.audioRef = action.payload.audioRef;
      return state;
    })
    .addCase(updateIsListen, (state, action) => {
      state.isListen = action.payload.isListen;
      return state;
    })
    .addCase(updateSongId, (state, action) => {
      state.songId = action.payload.songId;
      return state;
    })
    .addCase(loadAlbumIsListen, (state, action) => {
      state.selectedAlbum = fetchOneAlbum(action.payload.id);
      return state;
    })
    .addCase(loadArtistSongIsListen, (state, action) => {
      const popularSong = fetchOneArtistPopularSong(action.payload.id);
      state.selectedAlbum = { songs: popularSong };
      return state;
    })
    .addCase(loadMainReaderRef, (state) => {
      return state;
    });
});
