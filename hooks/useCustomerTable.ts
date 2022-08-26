/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

import { formatDate } from "@/lib/formatTime";
import { getCustomers } from "@/requests/getRequests";
import useDeleteCustomerMutation from "@/hooks/useDeleteCustomerMutation";

export default function useCustomerTable() {
  const { data, status } = useQuery("getCustomers", () => getCustomers());
  const queryClient = useQueryClient();
  const { mutate } = useDeleteCustomerMutation();

  const dataValue = useMemo(() => {
    if (status === "success") {
      const parsedData = JSON.parse(data?.data);
      return parsedData?.customers;
    } else {
      return [];
    }
  }, [status, queryClient]);

  const columns = useMemo(
    () => [
      { Header: "S/N", accessor: "sn" },
      {
        Header: "Name",
        id: "nameId",
        accessor: (originalRow: any) =>
          `${originalRow?.givenName} ${originalRow?.familyName}`,
      },
      {
        Header: "Email",
        accessor: "emailAddress",
      },
      {
        Header: "Created",
        id: "createdAtId",
        accessor: (originalRow: any) => formatDate(originalRow?.createdAt),
      },
      {
        Header: "Country",
        id: "countryId",
        accessor: (originalRow: any) => originalRow?.address?.country,
      },
      {
        Header: "Delete",
        accessor: "delete",
      },
    ],

    []
  );

  function deleteCustomer(id: string) {
    mutate(id, {
      onSuccess: () => {
        return queryClient.invalidateQueries("getCustomers");
      },
    });
  }

  return { dataValue, columns, status, deleteCustomer };
}
