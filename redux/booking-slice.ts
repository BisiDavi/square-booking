/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { BookingStateType } from "@/types/redux-types";

const initialState: BookingStateType = {
  bookingDate: undefined,
  bookingTime: null,
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    updateDate(state, action: PayloadAction<BookingStateType["bookingDate"]>) {
      state.bookingDate = action.payload;
    },
    updateTime(state, action: PayloadAction<BookingStateType["bookingTime"]>) {
      state.bookingTime = action.payload;
    },
    resetBooking(state) {
      state.bookingDate = undefined;
      state.bookingTime = null;
    },
  },
});

export const { updateDate, updateTime, resetBooking } = BookingSlice.actions;
export default BookingSlice.reducer;
