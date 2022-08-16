import { RiTeamFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";

import formatPrice from "@/lib/formatPrice";
import { formatServicePeriod } from "@/lib/formatTime";
import Button from "@/components/UI/Button";
import Accordion, { AccordionItem } from "@/components/Accordion";
import StoreLocation from "@/components/Location/StoreLocation";
import StoreTeam from "@/components/Team/StoreTeam";

import type { serviceItemType } from "@/types/service-type";
import { useState } from "react";

interface Props {
  variation: serviceItemType["itemData"]["variations"][0];
}

export default function ServiceVariationList({ variation }: Props) {
  const { presentAtLocationIds, itemVariationData } = variation;
  const { priceMoney, serviceDuration, teamMemberIds } = itemVariationData;
  const { amount, currency } = priceMoney;

  const [teamAccordion, setTeamAccordion] = useState(false);


  function toggleAccordionHandler() {
    setTeamAccordion(true);
  }

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
            onClick={toggleAccordionHandler}
          />
        </div>
      </div>
      <Accordion>
        {teamMemberIds.length > 0 && (
          <AccordionItem
            title="Team"
            icon={<RiTeamFill className="mr-1 text-xl" />}
            accordion={teamAccordion}
            setTeamAccordion={setTeamAccordion}
          >
            <StoreTeam teamMemberIds={teamMemberIds} />
          </AccordionItem>
        )}
        {presentAtLocationIds.length > 0 && (
          <AccordionItem
            title="Location"
            icon={<GoLocation className="mr-1 text-xl" />}
          >
            <StoreLocation presentAtLocationIds={presentAtLocationIds} />
          </AccordionItem>
        )}
      </Accordion>
    </li>
  );
}
