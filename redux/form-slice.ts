/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  service: null,
  staff: null,
};

const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    updateService(state, action: PayloadAction<any>) {
      state.service = action.payload;
    },
  },
});

export const { updateService } = FormSlice.actions;
export default FormSlice.reducer;
