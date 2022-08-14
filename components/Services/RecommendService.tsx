import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import { serviceType } from "@/types/service-type";

interface Props {
  service: serviceType["items"][0];
}
export default function RecommendService({ service }: Props) {
  console.log("service", service);
  const { priceMoney, serviceDuration } =
    service?.itemData?.variations[0]?.itemVariationData;
  const { amount, currency } = priceMoney;
  return (
    <div className="recommended-services border border-gray-200 rounded mr-2 p-4 h-44">
      <h3 className="font-bold text-xl">{service.itemData.name}</h3>
      <p className="text-gray-400 text-md font-medium">
        {service?.itemData?.description}
      </p>
      <div className="flex items-center mt-4">
        <span className="m4">{formatPrice(amount, currency)}</span>
        <span className="ml-4">⏰ {formatServicePeriod(serviceDuration)} </span>
      </div>
    </div>
  );
}
