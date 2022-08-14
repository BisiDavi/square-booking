import { useQuery } from "react-query";

import { listServices } from "@/requests";
import type { serviceType } from "@/types/service-type";
import RecommendService from "@/components/Services/RecommendService";

interface queryType {
  data: { data: string };
  status: "error" | "loading" | "idle" | "success";
}

export default function RecommendServices() {
  const { data, status }: queryType = useQuery("listServices", listServices);
  const serviceData = status === "success" ? JSON.parse(data.data) : [];
  const services: serviceType["items"] = serviceData.items;

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
