/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { BookingStateType } from "@/types/redux-types";

const initialState: BookingStateType = {
  date: undefined,
  time: null,
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    updateDate(state, action: PayloadAction<BookingStateType["date"]>) {
      state.date = action.payload;
    },
    updateTime(state, action: PayloadAction<BookingStateType["time"]>) {
      state.time = action.payload;
    },
  },
});

export const { updateDate, updateTime } = BookingSlice.actions;
export default BookingSlice.reducer;
