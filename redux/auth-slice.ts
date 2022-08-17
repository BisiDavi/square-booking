/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AuthStateType } from "@/types/redux-types";

const initialState: AuthStateType = {
  isAccessTokenAvailable: false,
  isAccessTokenValid: null,
  onboarding: false,
  merchantId: null,
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
    updateMerchantId(
      state,
      action: PayloadAction<AuthStateType["merchantId"]>
    ) {
      state.merchantId = action.payload;
    },
  },
});

export const {
  updateAccessTokenStatus,
  updateAccessTokenValidity,
  updateOnboarding,
  updateMerchantId,
} = AuthSlice.actions;
export default AuthSlice.reducer;
