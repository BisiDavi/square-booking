/* eslint-disable react/jsx-key */
import { useTable, usePagination } from "react-table";
import React from "react";

import useAppointmentTable from "@/hooks/useAppointmentTable";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";
import TableHeader from "@/components/Tables/TableHeader";
import TablePagination from "@/components/Tables/TablePagination";
import GetCustomer from "@/components/Customer/GetCustomer";
import GetServiceCatalog from "@/components/Services/GetService";
import GetTeammateName from "@/components/Team/GetTeammateName";
import GetLocationName from "@/components/Location/GetLocationName";

export default function AppointmentTable() {
  const { dataArray, status, columns, initialState } = useAppointmentTable();
  const tableInstance: any = useTable(
    {
      columns,
      data: dataArray,
      initialState,
    },
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  return (
    <>
      {status === "error" ? (
        "unable to fetch table data"
      ) : status === "loading" ? (
        <div className="center-ripple flex flex-col items-center justify-center h-52">
          <SpinnerRipple />
          <p>fetching appointments...</p>
        </div>
      ) : dataArray.length === 0 ? (
        <h3 className="font-bold text-2xl text-center">No Appointment yet</h3>
      ) : (
        <>
          <table {...getTableProps()} className="border mt-4 w-full">
            <TableHeader headerGroups={headerGroups} />
            <tbody {...getTableBodyProps()}>
              {page.map((row: any, index: number) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="my-4 h-14 border border-y text-center bg-white hover:bg-gray-100"
                  >
                    {row.cells.map((cell: any) => {
                      const indexCount = index + 1;
                      return (
                        <>
                          <td {...cell.getCellProps()}>
                            {cell.column.Header === "S/N" ? (
                              indexCount
                            ) : cell.column.Header === "Customer" ? (
                              <GetCustomer customerId={cell?.value} showName />
                            ) : cell.column.Header === "Service" ? (
                              <GetServiceCatalog serviceId={cell?.value} />
                            ) : cell.column.Header === "Team" ? (
                              <GetTeammateName teamId={cell?.value} />
                            ) : cell.column.Header === "Location" ? (
                              <GetLocationName locationId={cell?.value} />
                            ) : (
                              cell.render("Cell")
                            )}
                          </td>
                        </>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <TablePagination tableInstance={tableInstance} />
        </>
      )}
    </>
  );
}
