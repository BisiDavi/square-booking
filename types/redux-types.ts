export type UIStateType = {
  modal:
    | "auth-modal"
    | "form-modal-location"
    | "variation-modal-location"
    | null;
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
  merchant: {
    id: string | null;
    email: string | null;
    expiresAt: string | null;
  };
};

export type ViewStateType = {
  service: "create-service" | "create-service-form";
  staff: "create-staff" | "create-staff-form";
};
