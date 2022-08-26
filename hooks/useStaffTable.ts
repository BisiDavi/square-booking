/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "react-query";
import { useMemo } from "react";

import { searchTeam } from "@/requests/postRequests";

export default function useStaffTable() {
  const { data, status } = useQuery("searchTeam", () => searchTeam({}));

  const dataArray = useMemo(() => {
    if (status === "success") {
      const parsedData = JSON.parse(data?.data);
      return parsedData?.teamMembers;
    } else {
      return [];
    }
  }, [status]);

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
        Header: "Work Email",
        id: "workEmailId",
        accessor: (originalRow: any) => originalRow?.emailAddress,
      },
      {
        Header: "Work Phone",
        id: "workPhoneId",
        accessor: (originalRow: any) => originalRow?.phoneNumber,
      },
      {
        Header: "Access",
        id: "accessId",
        accessor: (originalRow: any) =>
          originalRow?.isOwner ? "Owner" : "Staff",
      },
      {
        Header: "Edit",
        accessor: "edit",
      },
    ],

    []
  );

  return { columns, dataArray, status };
}
