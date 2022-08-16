import { useAppSelector } from "@/hooks/useRedux";

interface TimePillProps {
  time: string;
}

function TimePill({ time }: TimePillProps) {
    
  return (
    <div className="timepill w-2/3 my-2 hover-bg-site-purple hover:text-white rounded-md py-2 flex justify-center px-2 items-center border border-gray-500">
      {time}
    </div>
  );
}

function availableTimePeriods(
  startTime: number,
  endTime: number,
  serviceDuration: number
) {
  let availablePeriods = [];
  for (let x = startTime; endTime > x; x++) {
    const newTime = `${x}:00`;
    availablePeriods.push(newTime);

    if (serviceDuration < 60) {
      const newTime2 = `${x}:${serviceDuration}`;
      availablePeriods.push(newTime2);
    }
  }
  return availablePeriods;
}

function formatServiceTime(givenTime: string) {
  const timeString = givenTime.split(":")[0];
  const time = Number(timeString);
  return time;
}

interface Props {
  serviceTime: number;
}

export default function PickServiceTime({ serviceTime }: Props) {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  const period: any = storeProfile?.businessHours.periods;
  const selectedPeriod = period[0];
  const startTime = formatServiceTime(selectedPeriod.startLocalTime);
  const endtTime = formatServiceTime(selectedPeriod.endLocalTime);

  const timeArray = availableTimePeriods(startTime, endtTime, serviceTime);

  return (
    <div className="grid grid-cols-4 w-11/12 place-items-center mb-6">
      {timeArray.map((time) => (
        <TimePill key={time} time={time} />
      ))}
    </div>
  );
}
