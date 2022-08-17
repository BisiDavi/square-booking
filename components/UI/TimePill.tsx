import { toast } from "react-toastify";

import Button from "@/components/UI/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateTime } from "@/redux/booking-slice";

interface TimePillProps {
  time: string;
}

export default function TimePill({ time }: TimePillProps) {
  const { bookingDate, bookingTime } = useAppSelector((state) => state.Booking);
  const dispatch = useAppDispatch();

  const splitTime = time.split(":");
  const getHourString = splitTime[0];
  const getSecondString = splitTime[1];
  const hour = Number(getHourString);
  const amPm = hour % 12 > 0 ? hour % 12 : hour;
  const amPmPeriod = hour > 11 ? "pm" : "am";
  const validTime = `${amPm}:${getSecondString} ${amPmPeriod}`;

  function selectTimeHandler(time: string) {
    if (bookingDate === undefined) {
      toast.info("Please select a booking date");
    } else {
      dispatch(updateTime(time));
    }
  }

  const selectedTime =
    validTime === bookingTime
      ? "bg-site-purple text-white border-site-purple"
      : "hover-bg-site-purple";

  return (
    <>
      <Button
        text={validTime}
        className={`timepill  my-2 font-bold ${selectedTime} hover:text-white rounded-md py-2 flex justify-center px-2 items-center border border-gray-500`}
        onClick={() => selectTimeHandler(validTime)}
      />
    </>
  );
}
