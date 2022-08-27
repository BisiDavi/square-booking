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

export default function ImageView() {
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
          <p>Fetching images...</p>
        </div>
      ) : (
        <div className="images flex flex-col">
          <h3 className="text-xl font-bold text-center my-4 mt-10">
            Uploaded Images
          </h3>
          <div className="image-group flex">
            {parsedData.map((imageItem: imageItemType) => (
              <div key={imageItem.id} className="image-wrapper mr-4">
                <Image
                  src={imageItem.imageData.url}
                  alt={imageItem.imageData.caption}
                  height={200}
                  width={300}
                  blurDataURL={imageItem.imageData.url}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
