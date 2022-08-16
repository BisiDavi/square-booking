import GetTeammate from "@/components/Team/GetTeammate";

import { serviceItemType } from "@/types/service-type";

interface StoreTeamProps {
  teamMemberIds: serviceItemType["itemData"]["variations"][0]["itemVariationData"]["teamMemberIds"];
}

export default function StoreTeam({ teamMemberIds }: StoreTeamProps) {
  return (
    <div className="flex items-center">
      <div className="teams flex flex-col w-full">
        {teamMemberIds.map((team, index) => {
          const teamLength = Number(teamMemberIds.length - 1);
          const showBorder = index !== teamLength ? "border-b pb-1" : "";
          return (
            <GetTeammate key={team} teamId={team} showBorder={showBorder} />
          );
        })}
      </div>
    </div>
  );
}
