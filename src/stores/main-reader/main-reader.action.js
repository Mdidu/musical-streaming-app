import { createAction } from "@reduxjs/toolkit";
import {
  ADD_MAIN_READER_REF,
  LOAD_ALBUM_IS_LISTEN,
  LOAD_MAIN_READER_REF,
  UPDATE_IS_LISTEN,
  UPDATE_SONG_ID,
} from "./main-reader.constante";

export const loadMainReaderRef = createAction(LOAD_MAIN_READER_REF);
export const loadAlbumIsListen = createAction(LOAD_ALBUM_IS_LISTEN);
export const addMainReaderRef = createAction(ADD_MAIN_READER_REF);
export const updateIsListen = createAction(UPDATE_IS_LISTEN);
export const updateSongId = createAction(UPDATE_SONG_ID);
