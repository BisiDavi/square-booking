import GetTeammate from "@/components/Team/GetTeammate";

interface Props {
  teams: string[];
}

export default function GetTeam({ teams }: Props) {
  return (
    <div className="teams flex flex-col w-full">
      {teams.map((team, index) => {
        const teamLength = Number(teams.length - 1);
        const showBorder = index !== teamLength ? "border-b pb-1" : "";
        return <GetTeammate key={team} teamId={team} showBorder={showBorder} />;
      })}
    </div>
  );
}
