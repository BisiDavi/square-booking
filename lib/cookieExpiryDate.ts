export default function cookieExpiryDate(): any {
  const dateInstance: Date = new Date();
  dateInstance.setDate(dateInstance.getDate() + 7);
  return dateInstance.toDateString();
}
