import type { serviceType } from "@/types/service-type";

export default function getServiceCategories(services: serviceType["items"]) {
  const serviceCategories: string[] = [];
  services.map((service) => {
    serviceCategories.push(service.itemData.name);
  });
  return serviceCategories;
}
