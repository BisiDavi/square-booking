import { getTeam } from "@/requests";
import { useQuery } from "react-query";

interface Props {
  teams: string[];
}

interface GetTeammateProps {
  teamId: string;
}

function GetTeammate({ teamId }: GetTeammateProps) {
  const { data, status } = useQuery(`team-${teamId}`, () => getTeam(teamId), {
    enabled: !!teamId,
  });
  return (
    <div className="team">
      {status === "error"
        ? "unable to fetch team member"
        : status === "loading"
        ? "fetching team member..."
        : data.data.teamMember.status === "ACTIVE" && (
            <>
              <h6>
                {data.data.teamMember?.givenName}{" "}
                {data.data.teamMember?.familyName}
              </h6>
              <p>{data.data.teamMember?.emailAddress}</p>
            </>
          )}
    </div>
  );
}

export default function GetTeam({ teams }: Props) {
  return (
    <div className="teams flex flex-col">
      {teams.map((team) => {
        return <GetTeammate key={team} teamId={team} />;
      })}
    </div>
  );
}
