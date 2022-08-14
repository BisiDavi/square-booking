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

export function formatServicePeriod(milliSeconds: number) {
  const seconds = milliSeconds / 1000;
  if (seconds < 60) {
    // seconds
    const secondsText = seconds === 1 ? "second" : "seconds";
    return `${seconds} ${secondsText}`;
  } else if (seconds > 60) {
    // minutes
    const periodMinutes = seconds / 60;
    const minuteText = periodMinutes < 2 ? "min" : "mins";
    return `${periodMinutes} ${minuteText}`;
  } else if (seconds > 3600) {
    // hours
    const periodHour = seconds / 3600;
    const hourText = periodHour < 2 ? "hr" : "hrs";
    return `${periodHour} ${hourText}`;
  }
}
