export type UIStateType = {
  modal: "auth-modal" | null;
  accordion: string | null;
};

export type BookingStateType = {
  bookingDate: Date | undefined;
  bookingTime: string | null;
};
