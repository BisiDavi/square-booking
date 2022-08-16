/* eslint-disable react-hooks/exhaustive-deps */
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Button from "@/components/UI/Button";
import BookingSidebar from "@/components/Sidebar/BookingSidebar";
import { getACatalogObject } from "@/requests";

export default function BookingView() {
  const router = useRouter();
  const catalogId: any = router?.query?.id;

  function goBack() {
    router.back();
  }
  const { data, status } = useQuery(
    "getACatalogObject",
    () => getACatalogObject(catalogId),
    {
      enabled: !!catalogId,
    }
  );
  const catalogData =
    status === "success" ? JSON.parse(data?.data).object : null;

  console.log("catalogData", catalogData);

  return (
    <div className="content container flex items-start mx-auto py-4 pt-24">
      <div className="w-3/5">
        <Button
          text="back"
          className="rounded-lg px-4 py-2 mb-2 bg-gray-400 text-white font-bold flex items-center hover:bg-gray-500"
          icon={<FaLongArrowAltLeft className="mr-2 text-2xl" />}
          onClick={goBack}
        />
        <h3 className="text-3xl font-medium">
          Please, pick a date for your appointment
        </h3>
        {status === "error" ? (
          "unable to fetch service"
        ) : status === "loading" ? (
          "loading..."
        ) : (
          <div className="pill rounded-xl px-5 py-8 border border-gray-500 w-3/4 mt-5">
            <h4 className="text-xl font-bold">Service:</h4>
          </div>
        )}
      </div>
      <BookingSidebar />
    </div>
  );
}
