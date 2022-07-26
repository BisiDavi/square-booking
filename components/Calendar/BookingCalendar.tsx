import { DayPicker } from "react-day-picker";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { updateDate } from "@/redux/booking-slice";

import "react-day-picker/dist/style.css";

export default function BookingCalendar() {
  const { bookingDate } = useAppSelector((state) => state.Booking);
  const dispatch = useAppDispatch();

  function selectDateHandler(date: any) {
    dispatch(updateDate(date));
  }

  let footer = (
    <p className="text-red-500 font-bold text-md mt-4">Please pick a day.</p>
  );
  if (bookingDate) {
    footer = (
      <p className="font-bold text-green-500 text-md mt-4">
        {bookingDate && bookingDate.toDateString()} selected
      </p>
    );
  }
  const currentFullDate = new Date();
  const currentDate = currentFullDate.getDate();
  const currentMonth = currentFullDate.getMonth();
  const currentYear = currentFullDate.getFullYear();
  const calenderDate = currentDate - 1;

  const disabledDays = [
    {
      from: new Date(1978, 0, 1),
      to: new Date(currentYear, currentMonth, calenderDate),
    },
  ];
  return (
    <DayPicker
      mode="single"
      selected={bookingDate}
      onDayClick={selectDateHandler}
      footer={footer}
      disabled={disabledDays}
    />
  );
}
