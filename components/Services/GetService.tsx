import { getACatalogObject } from "@/requests/postRequests";
import { useQuery } from "react-query";

interface Props {
  serviceId: string;
}

function GetService({ serviceId }: Props) {
  const { data, status } = useQuery(
    `getACatalogObject-${serviceId}`,
    () => getACatalogObject(serviceId),
    {
      enabled: !!serviceId,
    }
  );

  const parsedData =
    status === "success" ? JSON.parse(data?.data)?.object : null;
  return (
    <>
      <span>{parsedData?.itemData?.name}</span>
    </>
  );
}

export default function GetServiceCatalog({ serviceId }: Props) {
  const { data, status } = useQuery(`getACatalogObject-${serviceId}`, () =>
    getACatalogObject(serviceId)
  );
  const parsedData =
    status === "success" ? JSON.parse(data?.data)?.object : null;

  console.log("parsedData", parsedData);
  return (
    <div>
      {status === "error" ? (
        "unable to fetch customer"
      ) : status === "loading" ? (
        "loading..."
      ) : (
        <>
          <GetService serviceId={parsedData?.itemVariationData.itemId} />
        </>
      )}
    </div>
  );
}
