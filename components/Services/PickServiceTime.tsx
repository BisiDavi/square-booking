import { useAppSelector } from "@/hooks/useRedux";

function TimePill() {
  return (
    <div className="timepill hover:bg-purple-800 rounded-md py-2 px-4 border border-gray-500">
      9:00 am
    </div>
  );
}

function formatServiceTime(givenTime: string) {
  const timeString = givenTime.split(":")[0];
  const time = Number(timeString);
  return time;
}

export default function PickServiceTime() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  const period: any = storeProfile?.businessHours.periods;
  const selectedPeriod = period[0];
  const startTime = formatServiceTime(selectedPeriod.startLocalTime);
  const endtTime = formatServiceTime(selectedPeriod.endLocalTime);
  const range = endtTime - startTime;

  console.log("range", range);

  console.log("storeProfile", storeProfile);

  return (
    <div>
      <TimePill />
    </div>
  );
}
