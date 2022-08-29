import { getACatalogObject } from "@/requests/postRequests";
import Image from "next/image";
import { useQuery } from "react-query";
import SpinnerRipple from "../Loader/SpinnerRipple";

interface Props {
  imageId: string;
}

export default function ServiceImage({ imageId }: Props) {
  const { data, status } = useQuery(
    "getACatalogObject",
    () => getACatalogObject(imageId),
    {
      enabled: !!imageId,
    }
  );
  const parsedData = status === "success" ? JSON.parse(data.data).object : null;

  console.log("parsedData", parsedData);

  return (
    <div>
      {status === "error" ? (
        "unable to fetch image"
      ) : status === "loading" ? (
        <div className="flex flex-col mx-auto items-center">
          <SpinnerRipple />
          <p>Fetching service image...</p>
        </div>
      ) : (
        <Image
          src={parsedData?.imageData?.url}
          alt={parsedData?.imageData?.caption}
          height={400}
          width={800}
          blurDataURL={parsedData?.imageData?.url}
        />
      )}
    </div>
  );
}
