import { createAction } from "@reduxjs/toolkit";
import { DISPLAY_MODAL, HIDE_MODAL } from "./modal.constante";

export const displayModal = createAction(DISPLAY_MODAL);
export const hideModal = createAction(HIDE_MODAL);