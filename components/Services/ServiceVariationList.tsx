import { RiTeamFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";

import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import Button from "@/components/UI/Button";
import GetTeam from "@/components/Team/GetTeam";
import { serviceItemType } from "@/types/service-type";

interface Props {
  variation: serviceItemType["itemData"]["variations"][0];
}

export default function ServiceVariationList({ variation }:Props) {
  const { priceMoney, serviceDuration } = variation.itemVariationData;
  const { amount, currency } = priceMoney;
  return (
    <li
      key={variation.id}
      className="flex justify-between items-center ml-4 border px-4 my-2"
    >
      <div className="at-left flex flex-col">
        <h5 className="text-lg font-semibold">
          {variation.itemVariationData.name}
        </h5>
        <span className="flex items-center">
          <RiTeamFill className="mr-1 text-xl" /> Team:{" "}
          <GetTeam teams={variation.itemVariationData.teamMemberIds} />
        </span>
        <span className="flex items-center">
          <GoLocation className="mr-1 text-xl" /> Location:{" "}
        </span>
      </div>
      <div className="at-right flex items-center">
        <span className="mr-4">
          <h6 className="font-medium mb-0">{formatPrice(amount, currency)}</h6>
          <p className="text-gray-700 font-medium text-sm">
            {formatServicePeriod(serviceDuration)}
          </p>
        </span>
        <Button
          className="bg-site-purple mx-2 text-white hover:bg-blue-700  py-1 px-3 rounded-md"
          text="Book"
        />
      </div>
    </li>
  );
}
