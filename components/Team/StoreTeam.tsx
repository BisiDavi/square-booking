import GetTeammate from "@/components/Team/GetTeammate";

import type { serviceItemType } from "@/types/service-type";

interface StoreTeamProps {
  variation: serviceItemType["itemData"]["variations"][0];
}

export default function StoreTeam({ variation }: StoreTeamProps) {
  const { teamMemberIds } = variation.itemVariationData;
  return (
    <div className="flex items-center">
      <div className="teams flex flex-col w-full">
        {teamMemberIds.map((team, index) => {
          const teamLength = Number(teamMemberIds.length - 1);
          const showBorder = index !== teamLength ? "border-b pb-1" : "";
          return (
            <GetTeammate
              key={team}
              teamId={team}
              showBorder={showBorder}
              variation={variation}
            />
          );
        })}
      </div>
    </div>
  );
}
