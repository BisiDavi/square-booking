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
    <div className="recommended-services border border-gray-200 rounded mr-2 p-4 h-52">
      <h3 className="font-bold text-xl">{service.itemData.name}</h3>
      <p className="text-gray-400">{service?.itemData?.description}</p>
      <span className="mt-4">{formatPrice(amount, currency)}</span>
      <span>⏰ {formatServicePeriod(serviceDuration)} </span>
    </div>
  );
}
