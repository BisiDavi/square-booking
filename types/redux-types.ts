export type modalStateType =
  | "form-modal-location"
  | "variation-modal"
  | "form-modal-team" | "oauth-premium-modal"
  | null;

export type UIStateType = {
  modal: modalStateType;
  accordion: string | null;
  apploaded: boolean;
  sidebar: "create-staff" | null;
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
