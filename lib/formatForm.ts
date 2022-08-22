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
