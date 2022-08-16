/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UIStateType } from "@/types/redux-types";

const initialState: UIStateType = {
  modal: null,
  accordion: null,
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateModal(state, action: PayloadAction<UIStateType["modal"]>) {
      state.modal = action.payload;
    },
    toggleAccordion(state, action: PayloadAction<string | null>) {
      state.accordion = action.payload;
    },
  },
});

export const { updateModal, toggleAccordion } = UISlice.actions;
export default UISlice.reducer;
