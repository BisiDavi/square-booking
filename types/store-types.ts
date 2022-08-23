export type storeProfileType = {
  id: string;
  name: string;
  address: {
    addressLine1: string;
    locality: string;
    administrativeDistrictLevel1: string;
    postalCode: string;
    country: string;
  };
  timezone: string;
  capabilities: string[];
  status: string;
  createdAt: string;
  merchantId: string;
  country: string;
  languageCode: string;
  currency: string;
  phoneNumber: string;
  businessName: string;
  logoUrl: string;
  type: string;
  businessHours: {
    periods: {
      dayOfWeek: string;
      startLocalTime: string;
      endLocalTime: string;
    }[];
  };
  businessEmail: string;
  mcc: string;
};
