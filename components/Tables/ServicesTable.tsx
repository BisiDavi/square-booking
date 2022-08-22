import { useQuery } from "react-query";

import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import { listServices } from "@/requests/getRequests";
import { serviceItemType } from "@/types/service-type";
import GetTeammateName from "@/components/Team/GetTeammateName";
import GetCategory from "@/components/Category/GetCategory";

export default function ServicesTable() {
  const { data, status } = useQuery("listServices", listServices);

  const parsedData =
    status === "success" ? JSON.parse(data?.data)?.items : null;

  return (
    <table className="w-full mt-4 bg-white">
      <thead className="bg-gray-300 h-14">
        <tr className="border-b border-gray-300 text-left">
          <th className="pl-4">Name</th>
          <th>Category</th>
          <th>Teams</th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
      </thead>
      {status === "error" ? (
        "error, unable to fetch services"
      ) : status === "loading" ? (
        "loading, fetching services"
      ) : (
        <tbody className="">
          {parsedData.map((item: serviceItemType) => (
            <tr
              key={item.id}
              className="text-left hover:bg-gray-200 h-12 border-b"
            >
              <td className="pl-4">{item?.itemData?.name}</td>
              <td>
                {item?.itemData?.categoryId && (
                  <GetCategory categoryId={item?.itemData?.categoryId} />
                )}
              </td>
              <td>
                {item?.itemData?.variations[0]?.itemVariationData
                  ?.teamMemberIds && (
                  <GetTeammateName
                    teamId={
                      item?.itemData?.variations[0]?.itemVariationData
                        ?.teamMemberIds[0]
                    }
                  />
                )}
              </td>
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
                {item?.itemData?.variations[0]?.itemVariationData?.priceMoney
                  ? formatPrice(
                      item?.itemData?.variations[0]?.itemVariationData
                        ?.priceMoney.amount,
                      item?.itemData?.variations[0]?.itemVariationData
                        ?.priceMoney.currency
                    )
                  : "Varies"}
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
