import { useQuery } from "react-query";

import { getTeam } from "@/requests";
import Button from "../UI/Button";

interface GetTeammateProps {
  teamId: string;
  showBorder: string;
}

export default function GetTeammate({ teamId, showBorder }: GetTeammateProps) {
  const { data, status } = useQuery(`team-${teamId}`, () => getTeam(teamId), {
    enabled: !!teamId,
  });

  const statusCheck = data?.data?.teamMember?.status === "ACTIVE";

  const bookMeClassname = statusCheck
    ? "bg-red-500 hover:bg-red-400"
    : "bg-gray-500";

  const disableButton = statusCheck ? true : false;

  const buttonText = statusCheck ? "Book me" : "Not available";

  return (
    <div className="team w-">
      {status === "error" ? (
        "unable to fetch team member"
      ) : status === "loading" ? (
        "fetching team member..."
      ) : (
        <div
          className={`${showBorder} w-full flex justify-between items-center`}
        >
          <div className="text">
            <h6>
              <span className="font-medium mr-1">Name:</span>
              {data.data.teamMember?.givenName}{" "}
              {data.data.teamMember?.familyName}
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
          <Button
            className={`${bookMeClassname} text-white py-2 px-4 rounded-md `}
            text={buttonText}
            disabled={disableButton}
          />
        </div>
      )}
    </div>
  );
}
