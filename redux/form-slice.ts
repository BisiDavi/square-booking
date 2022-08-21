/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type seviceFormType = { [key: string]: any };
type payloadType = { name: string; data: any };
type initialStateType = {
  service: seviceFormType | any;
  staff: null;
};

const initialState: initialStateType = {
  service: null,
  staff: null,
};

const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    updateServiceForm(state, action: PayloadAction<payloadType>) {
      state.service[action.payload.name] = action.payload.data;
    },
  },
});

export const { updateServiceForm } = FormSlice.actions;
export default FormSlice.reducer;
