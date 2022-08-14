export default function formatDays(givenDay: string) {
  const days = [
    { key: "SUN", day: "Sunday" },
    { key: "MON", day: "Monday" },
    { key: "TUE", day: "Tuesday" },
    { key: "WED", day: "Wednesday" },
    { key: "THU", day: "Thursday" },
    { key: "FRI", day: "Friday" },
    { key: "SAT", day: "Saturday" },
  ];
  const filterDays = days.filter((day) => day.key === givenDay);
  const day = filterDays[0].day;
  return day;
}
