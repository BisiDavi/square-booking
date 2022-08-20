import { useQuery } from "react-query";
import { BsSearch } from "react-icons/bs";

import { searchTeam } from "@/requests/postRequests";
import Checkbox from "@/components/Form/FormElement/Checkbox";

export default function TeamModalView() {
  const { data, status } = useQuery("searchTeam", () => searchTeam({}));

  const teamMembers =
    status === "success" ? JSON.parse(data?.data).teamMembers : [];

  console.log("teamMembers", teamMembers);

  return (
    <div>
      <div className="form-modal w-11/12 flex flex-col mx-auto">
        <div className="search-input relative mx-auto flex justify-center w-full">
          <BsSearch className="mr-2 text-xl absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 py-2 w-full rounded-md pl-10"
          />
        </div>
        <div className="location-view h-44">
          {status === "error" ? (
            "unable to fetch location"
          ) : status === "loading" ? (
            "loading..."
          ) : (
            <div className="mt-4 list">
              <Checkbox label="All Team members" className="bg-gray-100" />
              {teamMembers.map(
                (member: {
                  id: string;
                  givenName: string;
                  familyName: string;
                  emailAddress: string;
                }) => {
                  const label = member.givenName
                    ? `${member.givenName} ${member.familyName}`
                    : member.emailAddress;
                  return <Checkbox label={label} key={member.id} />;
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}