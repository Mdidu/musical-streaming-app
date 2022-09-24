import { createAction } from "@reduxjs/toolkit";
import { LOAD_ONE_ALBUM } from "./album.constante";

export const loadOneAlbum = createAction(LOAD_ONE_ALBUM);