/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "react-query";
import { useMemo } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { listServices } from "@/requests/getRequests";
import { formatServicePeriod } from "@/lib/formatTime";
import formatPrice from "@/lib/formatPrice";
import useDeleteServiceMutation from "@/hooks/useDeleteServiceMutation";

export default function useServiceTable() {
  const { data, status } = useQuery("listServices", listServices);
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useDeleteServiceMutation();

  function deleteService(id: string) {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries("listServices");
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.errors[0]?.detail);
      },
    });
  }

  const dataArray = useMemo(() => {
    if (status === "success") {
      const parsedData = JSON.parse(data?.data);
      return parsedData?.items;
    } else {
      return [];
    }
  }, [status, isSuccess]);

  const columns = useMemo(
    () => [
      { Header: "S/N", accessor: "sn" },
      {
        Header: "Name",
        id: "nameId",
        accessor: (originalRow: any) => originalRow?.itemData?.name,
      },
      {
        Header: "Category",
        id: "categoryId",
        accessor: (originalRow: any) => originalRow?.itemData?.categoryId,
      },
      {
        Header: "Teams",
        id: "teamsId",
        accessor: (originalRow: any) =>
          originalRow?.itemData?.variations[0]?.itemVariationData?.teamMemberIds
            ? originalRow?.itemData?.variations[0]?.itemVariationData
                ?.teamMemberIds[0]
            : [],
      },
      {
        Header: "Duration",
        id: "durationId",
        accessor: (originalRow: any) => {
          return originalRow?.itemData?.variations[0]?.itemVariationData
            .serviceDuration
            ? formatServicePeriod(
                originalRow?.itemData?.variations[0]?.itemVariationData
                  .serviceDuration
              )
            : "-";
        },
      },
      {
        Header: "Price",
        id: "priceId",
        accessor: (originalRow: any) => {
          return originalRow?.itemData?.variations[0]?.itemVariationData
            ?.priceMoney
            ? formatPrice(
                originalRow?.itemData?.variations[0]?.itemVariationData
                  ?.priceMoney.amount,
                originalRow?.itemData?.variations[0]?.itemVariationData
                  ?.priceMoney.currency
              )
            : "Varies";
        },
      },
      {
        Header: "Delete",
        accessor: "delete",
      },
    ],

    []
  );

  return { columns, dataArray, status, deleteService };
}
