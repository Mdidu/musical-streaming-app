import { createAction } from "@reduxjs/toolkit";
import { LOAD_ONE_ARTIST } from './artist.constante';

export const loadOneArtist = createAction(LOAD_ONE_ARTIST)