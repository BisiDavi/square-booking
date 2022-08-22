import { AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "react-query";

import { useAppSelector } from "@/hooks/useRedux";
import formatCountry from "@/lib/formatCountry";
import SearchServices from "@/components/Form/FormElement/SearchServices";
import ServiceView from "@/components/View/ServiceView";
import { listServices } from "@/requests/getRequests";

import type { serviceItemType, serviceType } from "@/types/service-type";
interface Props {
  service: serviceItemType;
}

export default function ServicePageMain({ service }: Props) {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  const { data, status } = useQuery("listServices", listServices);
  const serviceData: serviceType =
    status === "success" ? JSON.parse(data.data) : null;

  const otherServices =
    status === "success"
      ? serviceData?.items.filter((services) => services?.id !== service?.id)
      : [];

  return (
    <>
      {storeProfile && (
        <div className="w-full px-4 lg:w-3/5 bg-white overflow-y-scroll mr-12">
          <div className="image-carousel">
            <div className="h-60 lg:h-80 bg-gray-600 w-full rounded-lg" />
            <div className="store">
              <div className="store-title flex items-center justify-between">
                <div className="title my-4">
                  <h3 className="font-bold text-3xl">{storeProfile?.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {storeProfile?.address?.addressLine1},{" "}
                    {formatCountry(storeProfile?.country)}
                  </p>
                </div>
                <AiOutlineHeart className="text-4xl mr-8" color="gray" />
              </div>
              <div className="service flex items-center justify-between">
                <h3 className="text-2xl">Services</h3>
                <SearchServices />
              </div>
              <div className="main-service">
                <ServiceView service={service} />
                <div className="other-services flex flex-col">
                  <h4 className="text-center text-2xl font-bold my-2 text-gray-500">
                    Other Services
                  </h4>
                  {otherServices.length > 0
                    ? otherServices.map((service) => (
                        <ServiceView key={service?.id} service={service} />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
