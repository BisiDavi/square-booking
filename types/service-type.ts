export type serviceType = {
  items: serviceItemType[];
  cursor: string;
  matched_variation_ids: string[];
};

type serviceItemType = {
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
        updated_at: string;
        created_at: string;
        version: string;
        is_deleted: false;
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
