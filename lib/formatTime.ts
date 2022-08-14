export default function formatTime(givenTime: string) {
  const splitTime = givenTime.split(":");
  const hour = Number(splitTime[0]);
  const seconds = splitTime[1];
  if (hour > 12) {
    const updatedHour = hour - 12;
    const updateTime = `${updatedHour}:${seconds}`;
    return updateTime;
  } else {
    return hour;
  }
}

export function formatServicePeriod(givenPeriod: number) {
  const ggivenPeriod = givenPeriod / 1000;
  if (ggivenPeriod > 60) {
    const periodMinutes = ggivenPeriod / 60;
    return `${periodMinutes} mins`;
  } else if (ggivenPeriod > 60) {
    const periodMSeconds = ggivenPeriod / 60;
    return periodMSeconds;
  }
}
