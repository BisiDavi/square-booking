type dataType = { [key: string]: string | number };

export function formatFormField(data: dataType, field: string) {
  return Object.keys(data).includes(field) ? data[field] : "";
}

export function formatCreateStaff(data: any) {
  return {
    emailAddress: formatFormField(data, "email-staff"),
    familyName: formatFormField(data, "lastname-staff"),
    givenName: formatFormField(data, "firstname-staff"),
    phoneNumber: formatFormField(data, "workphone-staff"),
    status: "ACTIVE",
  };
}

export function formatService(data: any) {
  return {
    presentAtAllLocations: true,
    itemData: {
      name: formatFormField(data, "name-service"),
      description: formatFormField(data, "description-service"),
      varations: [],
      productType: "",
    },
  };
}
