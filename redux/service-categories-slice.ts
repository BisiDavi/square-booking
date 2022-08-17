/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  serviceCategories: string[] | null;
};

const initialState: initialStateType = {
  serviceCategories: null,
};

const ServiceCategoriesSlice = createSlice({
  name: "ServiceCategories",
  initialState,
  reducers: {
    updateServiceCategories(state, action: PayloadAction<string[]>) {
      state.serviceCategories = action.payload;
    },
  },
});

export const { updateServiceCategories } = ServiceCategoriesSlice.actions;
export default ServiceCategoriesSlice.reducer;
