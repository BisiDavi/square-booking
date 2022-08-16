import { combineReducers } from "@reduxjs/toolkit";
import UIReducer from "@/redux/ui-slice";
import BookingReducer from "@/redux/booking-slice";
import StoreprofileReducer from "@/redux/store-profile-slice";
import ServiceCategoriesReducer from "@/redux/service-categories-slice";

const RootReducer = combineReducers({
  UI: UIReducer,
  StoreProfile: StoreprofileReducer,
  ServiceCategories: ServiceCategoriesReducer,
  Booking: BookingReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
