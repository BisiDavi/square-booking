import { useQuery } from "react-query";
import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useRedux";
import TimePill from "@/components/UI/TimePill";
import { searchBookingAvailability } from "@/requests/postRequests";
import getBookingStartData, {
  getBookingEndDate,
} from "@/lib/getBookingStartDate";

export default function PickServiceTime() {
  const { storeProfile }: any = useAppSelector((state) => state.StoreProfile);
  const { bookingDate }: any = useAppSelector((state) => state.Booking);
  const router = useRouter();
  const { serviceId, teamMember } = router.query;
  const startAt = getBookingStartData(
    bookingDate,
    "09:00 am",
    storeProfile?.timezone
  );
  const endAt = getBookingEndDate(
    bookingDate,
    "09:00 am",
    storeProfile?.timezone
  );

  const formData = {
    startAt,
    endAt,
    locationId: storeProfile?.id,
    serviceVariationId: serviceId,
    teamMemberIdFilter: teamMember,
  };

  const { data, status } = useQuery(
    `searchBookingAvailability-${startAt}`,
    () => searchBookingAvailability(formData),
    {
      enabled: !!bookingDate,
    }
  );

  const parsedData =
    status === "success" ? JSON.parse(data?.data)?.availabilities : [];

  return (
    <div className="grid grid-cols-4 gap-2 w-11/12 place-items-center mb-6">
      {status === "error"
        ? "unable to fetch available appointment period"
        : status === "loading"
        ? "fetching available appointment period"
        : parsedData.map((dataItem: any) => (
            <TimePill key={dataItem.startAt} data={dataItem} />
          ))}
    </div>
  );
}
