import GetLocation from "@/components/Location/GetLocation";

import { serviceItemType } from "@/types/service-type";

interface StoreLocationProps {
  presentAtLocationIds: serviceItemType["itemData"]["variations"][0]["presentAtLocationIds"];
}

export default function StoreLocation({
  presentAtLocationIds,
}: StoreLocationProps) {
  return (
    <span className="flex items-center">
      {presentAtLocationIds && (
        <GetLocation locationIds={presentAtLocationIds} />
      )}
    </span>
  );
}
