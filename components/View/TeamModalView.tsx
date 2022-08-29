import { useQuery } from "react-query";

import { searchTeam } from "@/requests/postRequests";
import Checkbox from "@/components/Form/FormElement/Checkbox";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";

interface Props {
  name: string;
}

export default function TeamModalView({ name }: Props) {
  const { data, status } = useQuery("searchTeam", () => searchTeam({}));

  const teamMembers =
    status === "success" ? JSON.parse(data?.data).teamMembers : [];

  return (
    <div>
      <div className="form-modal w-11/12 flex flex-col mx-auto">
        <div className="team-view h-40 overflow-y-scroll">
          {status === "error" ? (
            "unable to fetch location"
          ) : status === "loading" ? (
            <div className="mx-auto flex flex-col justify-center items-center">
              <SpinnerRipple />
              <p>Fetching team...</p>
            </div>
          ) : (
            <div className="list">
              <h4>Select Teammate</h4>
              <Checkbox
                label="All Team members"
                className="bg-gray-100"
                formType="service"
                value="all-team-members"
                type="team"
                name={name}
              />
              {teamMembers.map(
                (
                  member: {
                    id: string;
                    givenName: string;
                    familyName: string;
                    emailAddress: string;
                  },
                  index: number
                ) => {
                  const label = member.givenName
                    ? `${member.givenName} ${member.familyName}`
                    : member.emailAddress;
                  return (
                    <Checkbox
                      label={label}
                      key={member.id}
                      value={member.id}
                      formType="service"
                      type="team"
                      name={`${name}-${index}`}
                    />
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
