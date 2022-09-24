import { createReducer } from "@reduxjs/toolkit";
import { displayModal, hideModal } from "./modal.action";

const initialState = {
  isShowing: false,
  text: "",
};

export const modalReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(displayModal, (state, action) => {
      state.isShowing = true;
      state.text = action.payload.text;
      return state;
    })
    .addCase(hideModal, (state) => {
      state.isShowing = false;
      state.text = "";
      return state;
    });
});
