export type createCustomerType = {
  email: string;
  firstName: string;
  lastName: string;
};

export type teamMemberType = {
  id: string;
  isOwner: boolean;
  status: boolean;
  givenName: string;
  familyName: string;
  emailAddress: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  assignedLocations: {
    assignmentType: string;
  };
};

export type bookingType = {
  id: string;
  version: 0;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  locationId: string;
  customerId: string;
  startAt: Date;
  allDay: false;
  appointmentSegments: {
    durationMinutes: number;
    durationHours?: number;
    serviceVariationId: string;
    teamMemberId: string;
    serviceVariationVersion: number;
    anyTeamMember: false;
    intermissionMinutes: number;
  }[];
  transitionTimeMinutes: number;
  creatorDetails: {
    creatorType: string;
    teamMemberId: string;
  };
  source: string;
  locationType: string;
};

export type listCustomerType = {
  id: string;
  givenName: string;
  familyName: string;
  createdAt: Date;
  emailAddress: string;
  address: {
    country: string;
  };
};
