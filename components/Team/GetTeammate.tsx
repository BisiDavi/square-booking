import { useQuery } from "react-query";

import { getTeam } from "@/requests";

interface GetTeammateProps {
  teamId: string;
  showBorder: string;
}

export default function GetTeammate({ teamId, showBorder }: GetTeammateProps) {
  const { data, status } = useQuery(`team-${teamId}`, () => getTeam(teamId), {
    enabled: !!teamId,
  });

  return (
    <div className="team w-">
      {status === "error" ? (
        "unable to fetch team member"
      ) : status === "loading" ? (
        "fetching team member..."
      ) : (
        <div className={`${showBorder} w-full`}>
          <h6>
            <span className="font-medium mr-1">Name:</span>
            {data.data.teamMember?.givenName} {data.data.teamMember?.familyName}
          </h6>
          <p>
            <span className="font-medium mr-1">Email</span>
            {data.data.teamMember?.emailAddress}
          </p>
          <p>
            <span className="font-medium mr-1">Status:</span>
            {data.data.teamMember?.status}
          </p>
          <p>
            <span className="font-medium mr-1">Position:</span>
            {data.data.teamMember?.isOwner ? "Owner" : "Staff"}
          </p>
        </div>
      )}
    </div>
  );
}
