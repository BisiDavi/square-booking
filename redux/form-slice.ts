/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type payloadType = { name: string; data: any } | any;

type initialStateType = {
  form: { [key: string]: any };
};

const initialState: initialStateType = {
  form: {},
};

const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<payloadType>) {
      state.form[action.payload.name] = action.payload.data;
    },
    resetForm(state) {
      state.form = {};
    },
  },
});

export const { updateForm, resetForm } = FormSlice.actions;
export default FormSlice.reducer;
