import { useAppSelector } from "@/hooks/useRedux";
import formatServiceTime from "@/lib/formatServiceTime";
import getAvailablePeriods from "@/lib/getAvailablePeriods";
import TimePill from "@/components/UI/TimePill";

interface Props {
  serviceTime: number;
}

export default function PickServiceTime({ serviceTime }: Props) {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  const period: any = storeProfile?.businessHours.periods;
  const selectedPeriod = period[0];
  const startTime = formatServiceTime(selectedPeriod.startLocalTime);
  const endtTime = formatServiceTime(selectedPeriod.endLocalTime);

  const timeArray = getAvailablePeriods(startTime, endtTime, serviceTime);

  return (
    <div className="grid grid-cols-4 w-11/12 place-items-center mb-6">
      {timeArray.map((time) => (
        <TimePill key={time} time={time} />
      ))}
    </div>
  );
}
