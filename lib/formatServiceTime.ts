export default function formatServiceTime(givenTime: string) {
  const timeString = givenTime.split(":")[0];
  const time = Number(timeString);
  return time;
}
