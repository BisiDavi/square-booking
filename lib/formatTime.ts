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
