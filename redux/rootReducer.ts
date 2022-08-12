import { combineReducers } from "@reduxjs/toolkit";
import UIReducer from "@/redux/ui-slice";

const RootReducer = combineReducers({
  UI: UIReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
