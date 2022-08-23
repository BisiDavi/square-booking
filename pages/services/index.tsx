import { useQuery } from "react-query";
import RecommendServiceLoader from "@/components/Loader/RecommendServiceLoader";
import RecommendService from "@/components/Services/RecommendService";
import DefaultLayout from "@/layout/Default-layout";
import { listServices } from "@/requests/getRequests";
import { serviceType } from "@/types/service-type";

type queryType = {
  data: { data: string };
  status: "error" | "loading" | "idle" | "success";
};

export default function AllServicePage() {
  const { data, status }: queryType = useQuery("listServices", listServices);

  const serviceData = status === "success" ? JSON.parse(data.data) : [];
  return (
    <DefaultLayout>
      <section className="all-services container mx-auto mt-14">
        <h3 className="font-bold text-2xl text-center my-4">All Our Services</h3>
        <div className="service-grid">
          {status === "error" ? (
            "error"
          ) : status === "loading" ? (
            <RecommendServiceLoader />
          ) : (
            <div className="flex flex-col">
              <div className="services grid grid-cols-2 gap-3 lg:grid-cols-4 items-center">
                {serviceData.items.map((service: serviceType["items"][0]) => (
                  <RecommendService key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
 