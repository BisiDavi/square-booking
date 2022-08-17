/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UIStateType } from "@/types/redux-types";

const initialState: UIStateType = {
  modal: null,
  accordion: null,
  apploaded: false,
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateModal(state, action: PayloadAction<UIStateType["modal"]>) {
      state.modal = action.payload;
    },
    toggleAccordion(state, action: PayloadAction<UIStateType["accordion"]>) {
      state.accordion = action.payload;
    },
    updateAppload(state, action: PayloadAction<UIStateType["apploaded"]>) {
      state.apploaded = action.payload;
    },
  },
});

export const { updateModal, toggleAccordion, updateAppload } = UISlice.actions;
export default UISlice.reducer;
