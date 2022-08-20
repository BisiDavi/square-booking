import Link from "next/link";

import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import { serviceType } from "@/types/service-type";
import toSlug from "@/lib/toSlug";

interface Props {
  service: serviceType["items"][0];
}
export default function RecommendService({ service }: Props) {
  const { priceMoney, serviceDuration } =
    service?.itemData?.variations[0]?.itemVariationData;

  const serviceLink = `${toSlug(service.itemData.name)}?id=${service.id}`;
  return (
    <Link href={`/service/${serviceLink}`} passHref>
      <a className="recommended-services border border-gray-200 rounded mr-4 p-4 h-48 w-1/4 shadow hover:bg-gray-50 hover:border-blue-500">
        <h3 className="font-bold text-xl">{service.itemData.name}</h3>
        <p className="text-gray-400 text-md font-medium">
          {service?.itemData?.description}
        </p>
        <div className="flex items-center mt-4">
          <span className="m4">
            {priceMoney?.amount
              ? formatPrice(priceMoney?.amount, priceMoney?.currency)
              : "Free"}
          </span>
          <span className="ml-4">
            ⏰ {formatServicePeriod(serviceDuration)}{" "}
          </span>
        </div>
      </a>
    </Link>
  );
}
