import { useQuery } from "react-query";

import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import { listServices } from "@/requests/getRequests";
import { serviceItemType } from "@/types/service-type";

export default function ServicesTable() {
  const { data, status } = useQuery("listServices", listServices);

  const parsedData =
    status === "success" ? JSON.parse(data?.data)?.items : null;

  console.log("parsedData", parsedData);

  return (
    <table className="w-full mt-4">
      <thead className="bg-gray-300 h-14">
        <tr className="border-b border-gray-300 text-left">
          <th>Name</th>
          <th>Category</th>
          <th>Locations</th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
      </thead>
      {status === "error" ? (
        "error, unable to fetch services"
      ) : status === "loading" ? (
        "loading, fetching services"
      ) : (
        <tbody>
          {parsedData.map((item: serviceItemType) => (
            <tr key={item.id} className="text-left">
              <td>{item?.itemData?.name}</td>
              <td>-</td>
              <td>-</td>
              <td>
                {item?.itemData?.variations[0]?.itemVariationData
                  .serviceDuration
                  ? formatServicePeriod(
                      item?.itemData?.variations[0]?.itemVariationData
                        .serviceDuration
                    )
                  : "-"}
              </td>
              <td>
                {item?.itemData?.variations[0]?.itemVariationData?.priceMoney &&
                  formatPrice(
                    item?.itemData?.variations[0]?.itemVariationData?.priceMoney
                      .amount,
                    item?.itemData?.variations[0]?.itemVariationData?.priceMoney
                      .currency
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
