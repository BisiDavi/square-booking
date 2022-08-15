import { AiOutlineHeart } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";

import { useAppSelector } from "@/hooks/useRedux";
import formatCountry from "@/lib/formatCountry";
import type { serviceItemType } from "@/types/service-type";
import SearchServices from "@/components/Form/FormElement/SearchServices";
import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import Button from "@/components/UI/Button";
interface Props {
  service: serviceItemType;
}

export default function ServicePageMain({ service }: Props) {
  console.log("servicefdfs", service);
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
                <SearchServices />
              </div>
              <div className="main-service">
                <h4 className="font-bold text-xl">{service.itemData.name}</h4>
                <p className="text-md font-medium">
                  {service.itemData.description}
                </p>
                <ul>
                  <h5 className="font-medium text-lg text-center mb-0">
                    Variations
                  </h5>
                  {service.itemData.variations.map((variation) => {
                    const { priceMoney, serviceDuration } =
                      variation.itemVariationData;
                    const { amount, currency } = priceMoney;
                    return (
                      <li
                        key={variation.id}
                        className="flex justify-between items-center ml-4 border px-4 my-2"
                      >
                        <div className="at-left flex flex-col">
                          <h5 className="text-lg font-semibold">
                            {variation.itemVariationData.name}
                          </h5>
                          <span className="flex items-center">
                            <RiTeamFill className="mr-1 text-xl" /> Team:{" "}
                          </span>
                          <span className="flex items-center">
                            <GoLocation className="mr-1 text-xl" /> Location:{" "}
                          </span>
                        </div>
                        <div className="at-right flex items-center">
                          <span className="mr-4">
                            <h6 className="font-medium mb-0">
                              {formatPrice(amount, currency)}
                            </h6>
                            <p className="text-gray-700 font-medium text-sm">
                              {formatServicePeriod(serviceDuration)}
                            </p>
                          </span>
                          <Button
                            className="bg-site-purple mx-2 text-white hover:bg-blue-700  py-1 px-3 rounded-md"
                            text="Book"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
