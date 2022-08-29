import { useAppSelector } from "@/hooks/useRedux";

export default function VariationTable() {
  const { form } = useAppSelector((state) => state.Form);
  const { allVariations } = form;

  return (
    <table className="w-4/5 mt-4 mx-auto border">
      <thead>
        <th className="px-4 py-2">Variation</th>
        <th className="px-4 py-2">Duration</th>
        <th className="px-4 py-2">Price</th>
      </thead>
      <tbody className="w-full mt-4">
        {allVariations.map((variation: any, index: number) => (
          <tr
            key={`variation-${index}`}
            className="w-full mt-4 border hover:bg-gray-100 "
          >
            <td className="px-4 py-2">{variation["variationname-service"]}</td>
            <td className="px-4 py-2">
              {variation["duration-minutes-variationduration-service"]} mins
            </td>
            <td className="px-4 py-2">
              $
              {variation["variationprice-service"]
                ? `${variation["variationprice-service"]}.00`
                : "0.00"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
