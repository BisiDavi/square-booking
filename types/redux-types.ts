export type UIStateType = {
  modal: "auth-modal" | null;
  accordion: string | null;
};

export type BookingStateType = {
  date: Date | undefined;
  time: string | null;
};
