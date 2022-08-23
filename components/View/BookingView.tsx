/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import BookingSidebar from "@/components/Sidebar/BookingSidebar";
import { getACatalogObject } from "@/requests/postRequests";
import GetStaff from "@/components/Team/GetStaff";
import CustomerBookingForm from "@/components/Form/CustomerBookingForm";
import ServiceCard from "../Card/ServiceCard";

export default function BookingView() {
  const router = useRouter();
  const catalogId: any = router?.query?.id;

  const { data, status } = useQuery(
    "getACatalogObject",
    () => getACatalogObject(catalogId),
    {
      enabled: !!catalogId,
    }
  );
  const catalogData =
    status === "success" ? JSON.parse(data?.data).object : null;

  const staffId: any = router.query.teamMember;

  return (
    <div className="content container flex lg:flex-row flex-col lg:items-start lg:mx-auto py-4 pt-10">
      <div className="lg:w-3/5 w-full px-6">
        <h3 className="text-lg tect-center lg:text-start lg:text-3xl font-medium">
          Please, pick a date for your appointment
        </h3>
        {status === "error" ? (
          "unable to fetch service"
        ) : status === "loading" ? (
          "loading..."
        ) : (
          <>
            <ServiceCard />
            <div className="pill rounded-xl p-5 border border-gray-500 w-full lg:w-3/4 mt-5 hover:bg-gray-100">
              <GetStaff staffId={staffId} />
            </div>
            <div className="wrapper hidden lg:flex">
              <CustomerBookingForm />
            </div>
          </>
        )}
      </div>
      <BookingSidebar
        serviceDuration={
          catalogData?.itemData.variations[0].itemVariationData.serviceDuration
        }
      />
    </div>
  );
}
