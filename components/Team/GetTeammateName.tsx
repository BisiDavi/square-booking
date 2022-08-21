import { getTeam } from "@/requests/postRequests";
import React from "react";
import { useQuery } from "react-query";

interface Props {
  teamId: string;
}

export default function GetTeammateName({ teamId }: Props) {
  const { data, status } = useQuery(`team-${teamId}`, () => getTeam(teamId), {
    enabled: !!teamId,
  });
  return (
    <div>
      {status === "error" ? (
        "error"
      ) : status === "loading" ? (
        "loading..."
      ) : (
        <>
          <span>
            {`${data.data.teamMember?.givenName} ${data.data.teamMember?.familyName}`}
          </span>
        </>
      )}
    </div>
  );
}
