import { useQuery } from "react-query";

import { searchTeam } from "@/requests/postRequests";
import { teamMemberType } from "@/types/request-types";

export default function StaffTable() {
  const { data, status } = useQuery("searchTeam", () => searchTeam({}));

  const parsedData = status === "success" ? JSON.parse(data?.data) : null;

  return (
    <table className="border mt-4 w-full">
      <thead className="bg-gray-100 h-14">
        <tr>
          <th>Name</th>
          <th>Work Email</th>
          <th>Work Phone</th>
          <th>Accesss</th>
        </tr>
      </thead>
      {status === "error"
        ? "unable to fetch team"
        : status === "loading"
        ? "loading..."
        : parsedData && (
            <tbody>
              {parsedData.teamMembers.map((team: teamMemberType) => (
                <tr
                  key={team.id}
                  className="my-4 h-14 border border-y text-center"
                >
                  <td>
                    <span className="mx-1">{team?.givenName}</span>
                    <span className="mx-1å">{team?.familyName}</span>
                  </td>
                  <td>{team?.emailAddress}</td>
                  <td>{team?.phoneNumber}</td>
                  <td>{team?.isOwner ? "Owner" : "Staff"}</td>
                </tr>
              ))}
            </tbody>
          )}
    </table>
  );
}
