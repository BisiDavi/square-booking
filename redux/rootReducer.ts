import { combineReducers } from "@reduxjs/toolkit";
import UIReducer from "@/redux/ui-slice";
import StoreprofileReducer from "@/redux/store-profile-slice";

const RootReducer = combineReducers({
  UI: UIReducer,
  StoreProfile: StoreprofileReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
