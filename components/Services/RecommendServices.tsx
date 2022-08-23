/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "react-query";
import { useEffect, useMemo } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { listServices } from "@/requests/getRequests";
import RecommendService from "@/components/Services/RecommendService";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateServiceCategories } from "@/redux/service-categories-slice";
import getServiceCategories from "@/lib/getServiceCategories";
import RecommendServiceLoader from "@/components/Loader/RecommendServiceLoader";
import Button from "@/components/UI/Button";

import type { serviceType } from "@/types/service-type";

interface queryType {
  data: { data: string };
  status: "error" | "loading" | "idle" | "success";
}

export default function RecommendServices() {
  const { data, status }: queryType = useQuery("listServices", listServices);
  const serviceData = status === "success" ? JSON.parse(data.data) : [];
  const services: serviceType["items"] = serviceData.items;
  const dispatch = useAppDispatch();
  const { serviceCategories } = useAppSelector(
    (state) => state.ServiceCategories
  );

  const getFirstEightServices = services.slice(0, 8);

  const memoizedServiceCategory = useMemo(() => {
    return status === "success" ? getServiceCategories(services) : [];
  }, [status]);

  useEffect(() => {
    if (serviceCategories === null && status === "success") {
      dispatch(updateServiceCategories(memoizedServiceCategory));
    }
  }, [status]);

  return (
    <div className="flex  items-center my-8 px-3 lg:px-2 container mx-auto">
      {status === "error" ? (
        "error"
      ) : status === "loading" ? (
        <RecommendServiceLoader />
      ) : (
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-center mb-3">
            Recommended Services
          </h3>
          <div className="services grid grid-cols-2 gap-3 lg:grid-cols-4 items-center">
            {getFirstEightServices.map((service) => (
              <RecommendService key={service.id} service={service} />
            ))}
          </div>
          <Link href="/services">
            <a className="mt-4">
              <Button
                text="View All"
                className="font-bold text-xl my-4 flex justify-center hover:bg-gray-600 items-center relative bg-gray-800 w-1/6 mx-auto text-white py-3 rounded-md"
                icon={
                  <BsFillArrowRightCircleFill className="absolute right-5" />
                }
              />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
