export type UIStateType = {
  modal: "auth-modal" | null;
  accordion: string | null;
  apploaded: boolean;
};

export type BookingStateType = {
  bookingDate: Date | undefined;
  bookingTime: string | null;
};

export type AuthStateType = {
  isAccessTokenAvailable: boolean;
  isAccessTokenValid: boolean | null;
  onboarding: boolean;
  merchantId: string | null;
  userEmail: string;
};

export type ViewStateType = {
  service: "create-service" | "create-service-form";
  staff: "create-staff" | "create-staff-form";
};
