import { RiTeamFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";

import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import Button from "@/components/UI/Button";
import GetTeam from "@/components/Team/GetTeam";
import GetLocation from "@/components/Location/GetLocation";
import Accordion, { AccordionItem } from "@/components/Accordion";

import type { serviceItemType } from "@/types/service-type";

interface Props {
  variation: serviceItemType["itemData"]["variations"][0];
}

function StoreTeam({ variation }: Props) {
  return (
    <span className="flex items-center">
      <GetTeam teams={variation.itemVariationData.teamMemberIds} />
    </span>
  );
}

function StoreLocation({ variation }: Props) {
  return (
    <span className="flex items-center">
      <GetLocation locationIds={variation.presentAtLocationIds} />
    </span>
  );
}

export default function ServiceVariationList({ variation }: Props) {
  const { priceMoney, serviceDuration } = variation.itemVariationData;
  const { amount, currency } = priceMoney;
  return (
    <li
      key={variation.id}
      className="flex flex-col justify-between border px-4 pb-4 my-2"
    >
      <div className="w-full justify-between flex items-center my-3">
        <h5 className="text-lg font-semibold">
          {variation.itemVariationData.name}
        </h5>
        <div className="flex items-center">
          <span className="mr-4">
            <h6 className="font-medium mb-0">
              {formatPrice(amount, currency)}
            </h6>
            <p className="text-gray-700 font-medium text-sm">
              {formatServicePeriod(serviceDuration)}
            </p>
          </span>
          <Button
            className="bg-site-purple mx-2 text-white hover:bg-blue-700  py-1 px-3 rounded-md"
            text="Book"
          />
        </div>
      </div>
      <Accordion>
        <AccordionItem
          title="Team"
          icon={<RiTeamFill className="mr-1 text-xl" />}
        >
          <StoreTeam variation={variation} />
        </AccordionItem>
        <AccordionItem
          title="Location"
          icon={<GoLocation className="mr-1 text-xl" />}
        >
          <StoreLocation variation={variation} />
        </AccordionItem>
      </Accordion>
    </li>
  );
}
