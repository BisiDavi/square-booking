import { useQuery } from "react-query";
import { IoPersonCircleSharp } from "react-icons/io5";

import { getTeam } from "@/requests/postRequests";

interface Props {
  staffId: string;
}

export default function GetStaff({ staffId }: Props) {
  const { data, status } = useQuery(
    `staff-${staffId}`,
    () => getTeam(staffId),
    {
      enabled: !!staffId,
    }
  );
  const statusCheck = data?.data?.teamMember?.status === "ACTIVE";
  const activeClassName = statusCheck ? "text-green-600" : "text-red-500";
  return (
    <div>
      <div className="staff-title">
        <h4 className="flex items-center text-md text-gray-600 font-bold ">
          <IoPersonCircleSharp className="mr-2 text-xl" /> Selected Staff
        </h4>
      </div>
      {status === "error" ? (
        "unable to fetch staff"
      ) : status === "loading" ? (
        "fetching selected staff..."
      ) : (
        <div className={` w-full flex justify-between items-center`}>
          <div className="text">
            <h6>
              <span className="font-medium mr-1">Name:</span>
              {data.data.teamMember?.givenName}{" "}
              {data.data.teamMember?.familyName}
            </h6>
            <p className="break-words">
              <span className="font-medium mr-1">Email</span>
              {data.data.teamMember?.emailAddress}
            </p>
            <p>
              <span className="font-medium mr-1">Status:</span>
              <span className={`${activeClassName} font-medium`}>
                {data.data.teamMember?.status}
              </span>
            </p>
            <p>
              <span className="font-medium mr-1">Position:</span>
              {data.data.teamMember?.isOwner ? "Owner" : "Staff"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
