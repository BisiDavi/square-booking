/* eslint-disable react/jsx-key */

export default function TableHeader({ headerGroups }: any) {
  return (
    <thead className="bg-gray-100 h-14">
      {headerGroups.map((headerGroup: any) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
