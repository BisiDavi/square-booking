/* eslint-disable react/jsx-key */
import { useTable, usePagination } from "react-table";
import { BsTrash } from "react-icons/bs";

import useServiceTable from "@/hooks/useServiceTable";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";
import GetCategory from "@/components/Category/GetCategory";
import GetTeammateName from "@/components/Team/GetTeammateName";
import TablePagination from "@/components/Tables/TablePagination";
import TableHeader from "@/components/Tables/TableHeader";

function displayTeam(value: string) {
  return value ? <GetTeammateName teamId={value} /> : "-";
}

function displayCategory(value: string) {
  return value ? <GetCategory categoryId={value} /> : "-";
}

export default function ServicesTable() {
  const { status, dataArray, columns, deleteService } = useServiceTable();
  const initialState: any = {
    pageIndex: 0,
    pageSize: 5,
  };
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
    <section className="customers  my-4 rounded-md w-full">
      {status === "error" ? (
        "unable to fetch table data"
      ) : status === "loading" ? (
        <div className="center-ripple flex flex-col items-center justify-center h-52">
          <SpinnerRipple />
          <p>fetching services...</p>
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
                      return (
                        <td {...cell.getCellProps()}>
                          {cell.column.Header === "S/N" ? (
                            indexCount
                          ) : cell.column.Header === "Delete" ? (
                            <button
                              className="hover:text-red-500"
                              onClick={() =>
                                deleteService(cell.row.original.id)
                              }
                            >
                              <BsTrash className="mx-auto" />
                            </button>
                          ) : cell.column.Header === "Category" ? (
                            displayCategory(cell?.value)
                          ) : cell.column.Header === "Teams" ? (
                            displayTeam(cell?.value)
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
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
    </section>
  );
}
