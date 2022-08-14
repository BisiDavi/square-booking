import { useAppSelector } from "@/hooks/useRedux";
import formatCountry from "@/lib/formatCountry";
import type { serviceItemType } from "@/types/service-type";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  service: serviceItemType;
}

export default function ServicePageMain({ service }: Props) {
  console.log("service", service);
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <>
      {storeProfile && (
        <div className="w-2/3 bg-white">
          <div className="image-carousel">
            <div className="h-80 bg-gray-600 w-full rounded-lg" />
            <div className="store">
              <div className="store-title flex items-center justify-between">
                <div className="title my-4">
                  <h3 className="font-bold text-3xl">{storeProfile?.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {storeProfile?.address.addressLine1},{" "}
                    {formatCountry(storeProfile.country)}
                  </p>
                </div>
                <AiOutlineHeart className="text-4xl mr-8" color="gray" />
              </div>
              <div className="service flex items-center justify-between">
                <h3 className="text-2xl">Services</h3>
                <input
                  type="text"
                  className="input p-3 px-5 rounded-lg bg-gray-200 w-2/5"
                  placeholder="Search for services"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
