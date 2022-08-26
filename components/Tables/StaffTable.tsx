/* eslint-disable react/jsx-key */
import { BsPencilSquare } from "react-icons/bs";
import { useTable, usePagination } from "react-table";

import useStaffTable from "@/hooks/useStaffTable";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";
import TableHeader from "@/components/Tables/TableHeader";
import TablePagination from "@/components/Tables/TablePagination";

export default function StaffTable() {
  const initialState: any = {
    pageIndex: 0,
    pageSize: 5,
  };
  const { columns, dataArray, status } = useStaffTable();
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
    <div>
      {status === "error" ? (
        "unable to fetch table data"
      ) : status === "loading" ? (
        <div className="center-ripple flex flex-col items-center justify-center h-52">
          <SpinnerRipple />
          <p>fetching team...</p>
        </div>
      ) : dataArray.length === 0 ? (
        <h3 className="font-bold text-2xl text-center">No Services yet</h3>
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
                      console.log("cell", cell);
                      return (
                        <>
                          <td {...cell.getCellProps()}>
                            {cell.column.Header === "S/N" ? (
                              indexCount
                            ) : cell.column.Header === "Edit" ? (
                              <button
                                className="hover:text-red-500"
                                // onClick={() =>
                                //   deleteService(cell.row.original.id)
                                // }
                              >
                                <BsPencilSquare className="mx-auto" />
                              </button>
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
    </div>
  );
}
