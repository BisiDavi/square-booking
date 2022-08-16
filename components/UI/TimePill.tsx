import Button from "@/components/UI/Button";

interface TimePillProps {
  time: string;
}

export default function TimePill({ time }: TimePillProps) {
  const splitTime = time.split(":");
  const getHourString = splitTime[0];
  const getSecondString = splitTime[1];
  const hour = Number(getHourString);
  const amPm = hour % 12 > 0 ? hour % 12 : hour;
  const amPmPeriod = hour > 11 ? "pm" : "am";
  const validTime = `${amPm}:${getSecondString} ${amPmPeriod}`;
  return (
    <>
      <Button
        text={validTime}
        className="timepill  my-2 font-bold hover-bg-site-purple hover:text-white rounded-md py-2 flex justify-center px-2 items-center border border-gray-500"
      />
    </>
  );
}
