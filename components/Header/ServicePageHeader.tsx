import { AiOutlineHeart } from "react-icons/ai";

import { useAppSelector } from "@/hooks/useRedux";
import Button from "@/components/UI/Button";

export default function ServicePageHeader() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <header className="w-full bg-white shadow py-3">
      <div className="container  flex justify-between mx-auto items-center">
        <div className="store-name w-2/5">
          <h4 className="text-2xl font-bold">{storeProfile?.name}</h4>
          <p className="text-gray-600">{storeProfile?.address.addressLine1}</p>
        </div>
        <div className="cta w-2/5 flex items-center justify-end">
          <AiOutlineHeart className="text-3xl mr-8" color="gray" />
          <Button
            className="bg-site-purple w-3/5 text-white h-12 hover:bg-blue-800 rounded"
            text="Book Now"
          />
        </div>
      </div>
    </header>
  );
}
