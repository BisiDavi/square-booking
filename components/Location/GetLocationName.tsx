import { useQuery } from "react-query";

import { getLocation } from "@/requests/postRequests";

interface Props {
  locationId: string;
}

export default function GetLocationName({ locationId }: Props) {
  const { data, status } = useQuery(
    `location-${locationId}`,
    () => getLocation(locationId),
    {
      enabled: !!locationId,
    }
  );
  return (
    <div>
      {status === "error"
        ? "error"
        : status === "loading"
        ? "loading"
        : data?.data.location?.name}
    </div>
  );
}
