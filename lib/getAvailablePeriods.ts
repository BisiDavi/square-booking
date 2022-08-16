export default function getAvailablePeriods(
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
