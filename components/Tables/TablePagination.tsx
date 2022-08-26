export default function TablePagination({ tableInstance }: any) {
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const buttonArray = [
    { text: "<<", disabled: !canPreviousPage, func: () => gotoPage(0) },
    { text: "<", disabled: !canPreviousPage, func: () => previousPage() },
    { text: ">", disabled: !canNextPage, func: () => nextPage() },
    {
      text: ">>",
      disabled: !canNextPage,
      func: () => gotoPage(pageCount - 1),
    },
  ];

  return (
    <div className="pagination bg-gray-200 rounded-b flex items-center justify-center p-4">
      {buttonArray.map((buttonItem, index) => (
        <button
          key={index}
          onClick={buttonItem.func}
          disabled={buttonItem.disabled}
          className="mx-2 border p-1 h-6 flex items-center hover:bg-gray-900 hover:text-white border-gray-500"
        >
          {buttonItem.text}
        </button>
      ))}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span className="mx-2">
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          className="text-center w-20"
        />
      </span>{" "}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
        className="border p-1"
      >
        {[5, 10, 15, 20, 25].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}
