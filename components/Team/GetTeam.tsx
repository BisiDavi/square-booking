import { getTeam } from "@/requests";
import { useQuery } from "react-query";

interface Props {
  teams: string[];
}

interface GetTeammateProps {
  teamId: string;
  showBorder: string;
}

function GetTeammate({ teamId, showBorder }: GetTeammateProps) {
  const { data, status } = useQuery(`team-${teamId}`, () => getTeam(teamId), {
    enabled: !!teamId,
  });
  return (
    <div className="team w-">
      {status === "error"
        ? "unable to fetch team member"
        : status === "loading"
        ? "fetching team member..."
        : data.data.teamMember.status === "ACTIVE" && (
            <div className={`${showBorder} w-full`}>
              <h6>
                <span className="font-medium mr-1">Name:</span>
                {data.data.teamMember?.givenName}{" "}
                {data.data.teamMember?.familyName}
              </h6>
              <p>
                <span className="font-medium mr-1">Email</span>
                {data.data.teamMember?.emailAddress}
              </p>
            </div>
          )}
    </div>
  );
}

export default function GetTeam({ teams }: Props) {
  return (
    <div className="teams flex flex-col w-full">
      {teams.map((team, index) => {
        const teamLength = Number(teams.length - 1);
        console.log("teamLength", teamLength, index);
        const showBorder = index !== teamLength ? "border-b pb-1" : "";
        return <GetTeammate key={team} teamId={team} showBorder={showBorder} />;
      })}
    </div>
  );
}
