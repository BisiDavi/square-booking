export type modalStateType =
  | "form-modal-location"
  | "variation-modal"
  | "form-modal-team"
  | "oauth-premium-modal"
  | "successful-booking-modal"
  | null;

export type UIStateType = {
  modal: modalStateType;
  accordion: string | null;
  apploaded: boolean;
  sidebar: "create-staff" | null;
  mediaUpload:boolean
};

export type BookingStateType = {
  bookingDate: Date | undefined;
  bookingTime: string | null;
  appointment: {
    startAt: Date;
    locationId: string;
    appointmentSegments: {
      durationMinutes: number;
      serviceVariationId: string;
      teamMemberId: string;
      serviceVariationVersion: number;
    }[];
  } | null;
};

export type AuthStateType = {
  isAccessTokenAvailable: boolean;
  isAccessTokenValid: boolean | null;
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
