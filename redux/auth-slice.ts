/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AuthStateType } from "@/types/redux-types";

const initialState: AuthStateType = {
  isAccessTokenAvailable: false,
  isAccessTokenValid: null,
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
    updaateAccessTokenValidity(
      state,
      action: PayloadAction<AuthStateType["isAccessTokenValid"]>
    ) {
      state.isAccessTokenValid = action.payload;
    },
  },
});

export const { updateAccessTokenStatus, updaateAccessTokenValidity } =
  AuthSlice.actions;
export default AuthSlice.reducer;
