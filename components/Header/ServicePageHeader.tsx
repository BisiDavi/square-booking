import { memo } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import Button from "@/components/UI/Button";
import getStoreInitials from "@/lib/getStoreInitials";
import formatCountry from "@/lib/formatCountry";
import { greetUser } from "@/lib/formatDays";

function ServicePageHeaderComponent() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <header className="w-full fixed bg-white shadow py-3 z-50">
      <div className="container flex justify-between mx-auto items-center">
        <div className="store-name w-full lg:w-2/5 flex">
          {storeProfile?.name && (
            <div className="store-initials flex justify-center mr-4 rounded-full w-16 h-16 items-center  bg-gray-900  text-white border border-4 border-gray-500 text-center">
              <h3 className="font-bold text-lg -mt-1">
                {getStoreInitials(storeProfile?.name)}
              </h3>
            </div>
          )}
          {storeProfile && (
            <div className="service-name text-center lg:text-start">
              <h4 className="text-2xl font-bold">{storeProfile?.name}</h4>
              <p className="text-gray-600">
                {storeProfile?.address?.addressLine1},{" "}
                {formatCountry(storeProfile?.country)}
              </p>
            </div>
          )}
        </div>
        <div className="cta w-2/5 hidden lg:flex items-center justify-end">
          <Button
            className="bg-site-purple w-2/5 text-white text-xl font-bold h-12 hover:bg-blue-800 rounded"
            text={greetUser()}
          />
        </div>
      </div>
    </header>
  );
}

const ServicePageHeader = memo(ServicePageHeaderComponent);
export default ServicePageHeader;
