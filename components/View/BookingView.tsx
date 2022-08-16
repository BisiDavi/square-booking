/* eslint-disable react-hooks/exhaustive-deps */
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { BiLoaderCircle } from "react-icons/bi";

import Button from "@/components/UI/Button";
import BookingSidebar from "@/components/Sidebar/BookingSidebar";
import { getACatalogObject } from "@/requests";
import { GoLocation } from "react-icons/go";
import GetLocation from "../Location/GetLocation";

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
          <div className="pill rounded-xl px-5 py-8 border border-gray-500 w-3/4 mt-5 hover:bg-gray-100">
            <div className="flex-col text-gray-600 font-bold flex my-2">
              <span className="flex items-center text-md">
                <BiLoaderCircle className="mr-2" /> Service:{" "}
              </span>
              <h4 className="font-bold text-gray-800 text-2xl">
                {catalogData.itemData.name}
              </h4>
            </div>
            <div className="flex items-start flex-col font-bold text-gray-600">
              <span className="flex items-center text-md">
                <GoLocation className="mr-2" /> Location:
              </span>
              <span className="font-bold text-gray-800 mr-2">
                <GetLocation locationIds={catalogData.presentAtLocationIds} />
              </span>
            </div>
          </div>
        )}
      </div>
      <BookingSidebar />
    </div>
  );
}
