import { useAppSelector } from "@/hooks/useRedux";
import Button from "@/components/UI/Button";
import { AiOutlineHeart } from "react-icons/ai";

export default function ServicePageHeader() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <header className="w-full bg-white flex justify-between">
      <div className="store-name w-2/5">
        <h4 className="text-2xl font-bold">{storeProfile?.name}</h4>
        <p className="text-gray-600">{storeProfile?.address.addressLine1}</p>
      </div>
      <AiOutlineHeart />
      <Button className="bg-site-purple w-2/5" text="Book Now" />
    </header>
  );
}
