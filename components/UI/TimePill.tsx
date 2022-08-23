import Button from "@/components/UI/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setAppointment, updateTime } from "@/redux/booking-slice";

interface TimePillProps {
  data: any;
}

export default function TimePill({ data }: TimePillProps) {
  const { startAt } = data;
  const dateInstance = new Date(startAt);
  const hourVal = dateInstance.getHours();
  const minutesVal = dateInstance.getMinutes();
  const formatMinutes = minutesVal === 0 ? "00" : minutesVal;
  const formattedHour =
    hourVal > 12 ? (hourVal - 12 === 0 ? 12 : hourVal - 12) : hourVal;
  const period = hourVal > 12 ? "pm" : "am";

  const time = `${formattedHour}:${formatMinutes} ${period}`;

  const { bookingTime } = useAppSelector((state) => state.Booking);
  const dispatch = useAppDispatch();

  function selectTimeHandler(time: string) {
    dispatch(updateTime(time));
    dispatch(setAppointment(data));
  }

  const selectedTime =
    time === bookingTime
      ? "bg-site-purple text-white border-site-purple"
      : "hover-bg-site-purple";

  return (
    <>
      <Button
        text={time}
        className={`timepill  my-2 font-bold ${selectedTime} hover:text-white rounded-md py-2 flex justify-center px-2 items-center border border-gray-500`}
        onClick={() => selectTimeHandler(time)}
      />
    </>
  );
}
