export type serviceType = {
  items: serviceItemType[];
  cursor: string;
  matched_variation_ids: string[];
};

export type serviceItemType = {
  type: string;
  id: string;
  updatedAt: string;
  version: string;
  isDeleted: false;
  presentAtAllLocations: false;
  presentAtLocationIds: string[];
  itemData: {
    name: string;
    description: string;
    visibility: string;
    variations: [
      {
        type: string;
        id: string;
        updatedAt: string;
        version: string;
        isDeleted: false;
        presentAtAllLocations: false;
        presentAtLocationIds: string[];
        itemVariationData: {
          itemId: string;
          name: string;
          sku: string[];
          ordinal: number;
          pricingType: string;
          priceMoney: {
            amount: number;
            currency: string;
          };
          inventoryAlertType: string;
          serviceDuration: number;
          availableForBooking: true;
          sellable: true;
          stockable: true;
          teamMemberIds: string[];
        };
      }
    ];
    productType: string;
    skipModifierScreen: false;
  };
};
