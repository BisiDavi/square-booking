/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type seviceFormType = { [key: string]: any };
type payloadType = { name: string; data: any };
type initialStateType = {
  form: seviceFormType | any;
};

const initialState: initialStateType = {
  form: null,
};

const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<payloadType>) {
      state.form[action.payload.name] = action.payload.data;
    },
  },
});

export const { updateForm } = FormSlice.actions;
export default FormSlice.reducer;
