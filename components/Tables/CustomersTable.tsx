/* eslint-disable react/jsx-key */
import { useTable, usePagination } from "react-table";
import { BsTrash } from "react-icons/bs";

import useCustomerTable from "@/hooks/useCustomerTable";
import CustomersTablePagination from "@/components/Tables/TablePagination";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";
import TableHeader from "@/components/Tables/TableHeader";

export default function CustomersTable() {
  const { columns, dataValue, status, deleteCustomer } = useCustomerTable();
  const initialState: any = {
    pageIndex: 0,
    pageSize: 5,
  };
  const tableInstance: any = useTable(
    {
      columns,
      data: dataValue,
      initialState,
    },
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  return (
    <section className="customers bg-white my-4 rounded-md">
      {status === "error" ? (
        "unable to fetch table data"
      ) : status === "loading" ? (
        <div className="center-ripple flex flex-col items-center justify-center h-52">
          <SpinnerRipple />
          <p>fetching customers...</p>
        </div>
      ) : dataValue.length === 0 ? (
        <h3 className="font-bold text-2xl text-center">No Customers yet</h3>
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
                    className="my-4 h-14 border border-y text-center hover:bg-gray-100"
                  >
                    {row.cells.map((cell: any) => {
                      const indexCount = index + 1;
                      return (
                        <>
                          <td {...cell.getCellProps()}>
                            {cell.column.Header === "S/N" ? (
                              indexCount
                            ) : cell.column.Header === "Delete" ? (
                              <button
                                className="hover:text-red-500"
                                onClick={() =>
                                  deleteCustomer(cell.row.original.id)
                                }
                              >
                                <BsTrash className="mx-auto" />
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
          <CustomersTablePagination tableInstance={tableInstance} />
        </>
      )}
    </section>
  );
}
