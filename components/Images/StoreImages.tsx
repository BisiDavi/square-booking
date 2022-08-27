import { useQuery } from "react-query";
import Image from "next/image";

import { getImages } from "@/requests/postRequests";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";

type imageItemType = {
  id: string;
  imageData: {
    url: string;
    caption: string;
  };
};

export default function StoreImages() {
  const { data, status } = useQuery("getImages", getImages);

  const parsedData =
    status === "success" ? JSON.parse(data?.data)?.objects : [];

  return (
    <div className="image-view">
      {status === "error" ? (
        "unable to fetch images"
      ) : status === "loading" ? (
        <div className="image-loader flex mx-auto justify-center flex-col items-center my-10">
          <SpinnerRipple />
          <p>Fetching store images...</p>
        </div>
      ) : (
        <div className="images flex flex-col">
          <h3 className="text-xl font-bold text-center my-4 mt-10">
            Our Store Image Collection
          </h3>
          <div className="image-group grid lg:grid-cols-4 grid-cols-2 gap-4">
            {parsedData.map((imageItem: imageItemType) => (
              <Image
                key={imageItem.id}
                src={imageItem.imageData.url}
                alt={imageItem.imageData.caption}
                height={200}
                width={300}
                blurDataURL={imageItem.imageData.url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
