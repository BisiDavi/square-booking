import { useQuery } from "react-query";

import formatCountry from "@/lib/formatCountry";
import { getLocation } from "@/requests/postRequests";


interface LocationItemProps {
  locationId: string;
}

export default function LocationItem({ locationId }: LocationItemProps) {
  const { data, status } = useQuery(
    `location-${locationId}`,
    () => getLocation(locationId),
    {
      enabled: !!locationId,
    }
  );
  return (
    <>
      {status === "error"
        ? "unable to fetch location"
        : status === "loading"
        ? "fetching location ..."
        : data.data.location.status === "ACTIVE" && (
            <>
              <div className="location flex flex-col">
                <div>
                  <span className="font-medium mr-1">Address:</span>
                  {data.data.location.address.postalCode},{" "}
                  {data.data.location.address.addressLine1},{" "}
                  {data.data.location.address.locality},{" "}
                  {formatCountry(data.data.location.address.country)}
                </div>
                <div>
                  <span className="font-medium mr-1">Timezone:</span>
                  {data.data.location.timezone}
                </div>
              </div>
            </>
          )}
    </>
  );
}
