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
