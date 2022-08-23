export default function getBookingStartData(
  bookingDate: Date,
  bookingTime: string,
  timeZone: string
) {
  if (bookingDate && bookingTime) {
    const dateInstance = new Date(bookingDate);
    const date = dateInstance.getUTCDate();
    const month = dateInstance.getUTCMonth();
    const year = dateInstance.getUTCFullYear();
    const timeInstance = bookingTime?.split(":");
    const splitTime = timeInstance[1].split(" ");
    let hour = timeInstance[0];
    const period = splitTime[1];
    const minute = splitTime[0];
    let fmHour = Number(hour);
    let fmMinute = Number(minute);
    if (period === "pm") {
      fmHour = Number(hour) + 12;
    }
    const actualDate = new Date(
      Date.UTC(year, month, date, fmHour, fmMinute, 0)
    );
    const timezoneDate = new Date(
      actualDate.toLocaleString("en-US", { timeZone })
    );
    return timezoneDate;
  }
}
