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
      <a className="recommended-services relative border border-gray-200 rounded mr-4 p-4 h-44 lg:h-40 w-full   shadow hover:bg-gray-50 hover:border-blue-500">
        <h3 className="font-bold text-md lg:text-xl">
          {service.itemData.name}
        </h3>
        <p className="card-description text-gray-400 text-sm lg:text-md font-medium">
          {service?.itemData?.description}
        </p>
        <div className="flex w-full justify-between text-xs lg:text-sm items-center mt-4">
          <span className="m4 flex items-center">
            {priceMoney?.amount
              ? formatPrice(priceMoney?.amount, priceMoney?.currency)
              : "Free"}
          </span>
          <span className="lg:ml-4 text-xs text-sm flex items-center">
            ⏰ {formatServicePeriod(serviceDuration)}{" "}
          </span>
        </div>
        <style jsx>
          {`
            @media (max-width: 500px) {
              .card-description {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
}
