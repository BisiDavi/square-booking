import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import UIReducer from "@/redux/ui-slice";
import BookingReducer from "@/redux/booking-slice";
import StoreprofileReducer from "@/redux/store-profile-slice";
import ServiceCategoriesReducer from "@/redux/service-categories-slice";
import AuthReducer from "@/redux/auth-slice";

const reducers = combineReducers({
  UI: UIReducer,
  StoreProfile: StoreprofileReducer,
  ServiceCategories: ServiceCategoriesReducer,
  Booking: BookingReducer,
  Auth: AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["UI"],
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
