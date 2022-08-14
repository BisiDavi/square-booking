/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "react-query";
import { useEffect, useMemo } from "react";

import { listServices } from "@/requests";
import RecommendService from "@/components/Services/RecommendService";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateServiceCategories } from "@/redux/service-categories-slice";
import getServiceCategories from "@/lib/getServiceCategories";

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

  const memoizedServiceCategory = useMemo(() => {
    return status === "success" ? getServiceCategories(services) : [];
  }, [status]);

  useEffect(() => {
    if (serviceCategories === null && status === "success") {
      dispatch(updateServiceCategories(memoizedServiceCategory));
    }
  }, [dispatch, serviceCategories, memoizedServiceCategory, status]);

  return (
    <div className="flex items-center my-8 container mx-auto">
      {status === "error" ? (
        "error"
      ) : status === "loading" ? (
        "loading"
      ) : (
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-3">Recommended Services</h3>
          <div className="services flex items-center">
            {services.map((service) => (
              <RecommendService key={service.id} service={service} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
