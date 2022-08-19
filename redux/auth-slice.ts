/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AuthStateType } from "@/types/redux-types";

const initialState: AuthStateType = {
  isAccessTokenAvailable: false,
  isAccessTokenValid: null,
  onboarding: false,
  merchant: {
    id: null,
    email: null,
    expiresAt: null,
  },
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    updateAccessTokenStatus(
      state,
      action: PayloadAction<AuthStateType["isAccessTokenAvailable"]>
    ) {
      state.isAccessTokenAvailable = action.payload;
    },
    updateAccessTokenValidity(
      state,
      action: PayloadAction<AuthStateType["isAccessTokenValid"]>
    ) {
      state.isAccessTokenValid = action.payload;
    },
    updateOnboarding(
      state,
      action: PayloadAction<AuthStateType["onboarding"]>
    ) {
      state.onboarding = action.payload;
    },
    updateMerchant(state, action: PayloadAction<AuthStateType["merchant"]>) {
      state.merchant = action.payload;
    },
  },
});

export const {
  updateAccessTokenStatus,
  updateAccessTokenValidity,
  updateOnboarding,
  updateMerchant,
} = AuthSlice.actions;
export default AuthSlice.reducer;
