export default function formatTime(givenTime: string) {
  const splitTime = givenTime.split(":");
  const hour = Number(splitTime[0]);
  const seconds = splitTime[1];
  if (hour > 12) {
    const updatedHour = hour - 12;
    const updateTime = `${updatedHour}:${seconds}`;
    return updateTime;
  } else {
    return givenTime;
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

export function formatDate(dateString: Date) {
  const dateInstance = new Date(dateString).toDateString();
  return dateInstance;
}

export function formatPeriod(givenDate: Date, duration: number) {
  const timeInstance = new Date(givenDate).toLocaleTimeString();
  const splitTime = timeInstance.split(":");
  const minutesString = timeInstance.split(":")[1];
  const timeString = Number(splitTime[0]) > 12 ? "pm" : "am";
  const minutes = Number(minutesString);
  const hour =
    duration === 60 ? Number(splitTime[0]) + 1 : Number(splitTime[0]);
  const updateMinutes =
    duration === 60 ? "00" : duration < 60 ? duration + minutes : "";
  const startPeriod = `${splitTime[0]}:${splitTime[1]}`;
  const endPeriod = `${hour}:${updateMinutes}`;
  const period = `${formatTime(startPeriod)}${timeString} - ${formatTime(
    endPeriod
  )}${timeString}`;
  return period;
}
