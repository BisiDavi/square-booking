/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { ViewStateType } from "@/types/redux-types";

const initialState: ViewStateType = {
  service: "create-service",
  staff: "create-staff",
};

const ViewSlice = createSlice({
  name: "View",
  initialState,
  reducers: {
    updateService(state, action: PayloadAction<ViewStateType["service"]>) {
      state.service = action.payload;
    },
    updateStaff(state, action: PayloadAction<ViewStateType["staff"]>) {
      state.staff = action.payload;
    },
  },
});

export const { updateService, updateStaff } = ViewSlice.actions;
export default ViewSlice.reducer;
