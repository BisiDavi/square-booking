import toSlug from "./toSlug";

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
  const duration =
    Number(formatFormField(data, "duration-minutes-duration-service")) *
    60 *
    1000;
  const categoryId = data["service-category"]
    ? {
        categoryId: data["service-category"]["value"],
      }
    : "";
  const descriptionHtml = data["description-service"]
    ? { descriptionHtml: data["description-service"] }
    : "";
  const name: any = formatFormField(data, "name-service");
  const durationPeriod = duration ? { serviceDuration: duration } : "";

  return {
    presentAtAllLocations: true,
    type: "ITEM",
    id: `#${toSlug(name)}`,
    itemData: {
      name: name,
      ...categoryId,
      variations: [
        {
          type: "ITEM_VARIATION",
          id: "#regular",
          itemVariationData: {
            itemId: `#${toSlug(name)}`,
            name: "Regular",
            pricingType: data["pricetype-service"],
            priceMoney: {
              amount: formatFormField(data, "price-service"),
              currency: "USD",
            },
            availableForBooking: true,
          },
        },
      ],
      ...descriptionHtml,
      ...durationPeriod,
      productType: "APPOINTMENTS_SERVICE",
    },
  };
}

function dataObj(data: dataType, label: string, name: string) {
  return data[label] ? { [name]: data[label] } : "";
}

export function formatCustomerBookingForm(data: any) {
  const firstName = dataObj(data, "firstname-customer", "firstName");
  const lastName = dataObj(data, "lastname-customer", "lastName");
  const email = dataObj(data, "email-customer", "email");
  const locationType = dataObj(data, "location-customer", "locationType");
  const note = dataObj(data, "note-customer", "note");
  return {
    ...firstName,
    ...lastName,
    ...email,
    ...locationType,
    ...note,
  };
}
