import GetTeam from "@/components/Team/GetTeam";

import { serviceItemType } from "@/types/service-type";

interface StoreTeamProps {
  teamMemberIds: serviceItemType["itemData"]["variations"][0]["itemVariationData"]["teamMemberIds"];
}

export default function StoreTeam({ teamMemberIds }: StoreTeamProps) {
  return (
    <span className="flex items-center">
      <GetTeam teams={teamMemberIds} />
    </span>
  );
}
