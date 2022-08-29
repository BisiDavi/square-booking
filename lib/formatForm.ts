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

  function formatVariation() {
    const { allVariations } = data;
    let variationArray: any[] = [];
    allVariations.map((variation: any) => {
      const locationIds = variation["locations"]
        ? { presentAtLocationIds: variation["locations"] }
        : "";
      const teamIds = variation["team"]
        ? { teamMemberIds: variation["team"] }
        : "";
      return variationArray.push({
        type: "ITEM_VARIATION",
        id: variation["variationname-service"]
          ? `#${variation["variationname-service"]}`
          : "#regular",
        itemVariationData: {
          itemId: `#${toSlug(name)}`,
          name: variation["variationname-service"]
            ? variation["variationname-service"]
            : "Regular",
          ...locationIds,
          ...teamIds,
          pricingType: variation["variationpricetype-service"]
            ? variation["variationpricetype-service"]
            : "FIXED_PRICING",
          priceMoney: {
            amount: variation["variationprice-service"]
              ? Number(variation["variationprice-service"]) * 100
              : 0,
            currency: "USD",
          },
          durationPeriod:
            Number(variation["duration-minutes-variationduration-service"]) *
            60 *
            1000,
          availableForBooking:
            variation["variationbookablebycustomersonline-service"],
        },
      });
    });
    return variationArray;
  }

  const variations = formatVariation();

  console.log("variations", variations);

  const imageIds = data["image"] ? { imageIds: [] } : "";

  return {
    presentAtAllLocations: true,
    type: "ITEM",
    id: `#${toSlug(name)}`,
    itemData: {
      name: name,
      ...categoryId,
      variations,
      ...descriptionHtml,
      ...imageIds,
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
  const customerNote = dataObj(data, "note-customer", "customerNote");
  return {
    ...firstName,
    ...lastName,
    ...email,
    ...customerNote,
  };
}
