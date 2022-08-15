import { useQuery } from "react-query";

import formatCountry from "@/lib/formatCountry";
import { getLocation } from "@/requests";

interface Props {
  locationIds: string[];
}

interface LocationItemProps {
  locationId: string;
}

function LocationItem({ locationId }: LocationItemProps) {
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
                <span>
                  Address : {data.data.location.address.postalCode},{" "}
                  {data.data.location.address.addressLine1},{" "}
                  {data.data.location.address.locality},{" "}
                  {formatCountry(data.data.location.address.country)}
                </span>
                <span>Timezone : {data.data.location.timezone}</span>
              </div>
            </>
          )}
    </>
  );
}

export default function GetLocation({ locationIds }: Props) {
  return (
    <div>
      {locationIds.map((locationId) => (
        <LocationItem key={locationId} locationId={locationId} />
      ))}
    </div>
  );
}
