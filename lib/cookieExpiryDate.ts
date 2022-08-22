export default function cookieExpiryDate() {
  const dateInstance: Date = new Date();
  dateInstance.setDate(dateInstance.getDate() + 7);
  return dateInstance;
}
