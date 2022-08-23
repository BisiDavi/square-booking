import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { BiLoaderCircle, BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoPricetag } from "react-icons/io5";

import GetLocation from "@/components/Location/GetLocation";
import { getACatalogObject } from "@/requests/postRequests";
import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";

export default function ServiceCard() {
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

      const availabilityCheck =
        catalogData?.itemData?.variations[0]?.itemVariationData;
      const availabiltyClassName = availabilityCheck
        ? "bg-green-600"
        : "bg-red-600 ";

  return (
    <div className="pill rounded-xl p-5 border border-gray-500 w-full lg:w-3/4 mt-5 hover:bg-gray-100 relative">
      <div
        className={`tag ${availabiltyClassName} rounded-md absolute px-2 py-1 text-xs top-2 right-2 text-white`}
      >
        {catalogData.itemData.variations[0].itemVariationData
          .availableForBooking
          ? "AVAILABLE FOR BOOKING"
          : "NOT AVAILABLE"}
      </div>
      <div className="flex-col text-gray-600 font-bold flex my-2 ">
        <span className="flex items-center text-md">
          <BiLoaderCircle className="mr-2 text-xl" /> Service{" "}
        </span>
        <h4 className="text-xl font-bold text-gray-800 text-2xl">
          {catalogData.itemData.name}
        </h4>
      </div>
      <div className="flex items-start flex-col font-bold text-gray-600">
        <span className="flex items-center text-md">
          <GoLocation className="mr-2 text-xl" /> Location
        </span>
        <span className="font-bold text-gray-800 mr-2">
          <GetLocation locationIds={catalogData.presentAtLocationIds} />
        </span>
      </div>
      <div className="mr-4 flex items-center justify-between">
        <h6 className="font-medium mb-0">
          <span className="flex items-center">
            <IoPricetag className="mr-1" />
            {formatPrice(
              catalogData.itemData.variations[0].itemVariationData.priceMoney
                .amount,
              catalogData.itemData.variations[0].itemVariationData.priceMoney
                .currency
            )}{" "}
          </span>
        </h6>
        <h6 className="font-medium">
          <span className="flex items-center">
            <BiTimeFive className="mr-1 text-xl" />
            {formatServicePeriod(
              catalogData.itemData.variations[0].itemVariationData
                .serviceDuration
            )}
          </span>
        </h6>
      </div>
    </div>
  );
}
