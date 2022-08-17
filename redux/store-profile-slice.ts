/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { storeProfileType } from "@/types/store-types";

type initialStateType = {
  storeProfile: storeProfileType | null;
};

const initialState: initialStateType = {
  storeProfile: null,
};

const StoreprofileSlice = createSlice({
  name: "StoreProfile",
  initialState,
  reducers: {
    updateStoreProfile(state, action: PayloadAction<storeProfileType>) {
      state.storeProfile = action.payload;
    },
  },
});

export const { updateStoreProfile } = StoreprofileSlice.actions;
export default StoreprofileSlice.reducer;
