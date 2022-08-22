import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { getTeam } from "@/requests/postRequests";
import Button from "@/components/UI/Button";
import toSlug from "@/lib/toSlug";

import type { serviceItemType } from "@/types/service-type";

interface GetTeammateProps {
  teamId: string;
  showBorder: string;
  variation: serviceItemType["itemData"]["variations"][0];
  service: string;
}

export default function GetTeammate({
  teamId,
  showBorder,
  variation,
  service,
}: GetTeammateProps) {
  const { data, status } = useQuery(`team-${teamId}`, () => getTeam(teamId), {
    enabled: !!teamId,
  });
  const router = useRouter();
  const statusCheck = data?.data?.teamMember?.status === "ACTIVE";
  const serviceId = toSlug(service);

  const bookMeClassname =
    router.query?.teamMember === teamId && router.query.slug === serviceId
      ? "bg-site-purple"
      : statusCheck
      ? "bg-red-500 hover:bg-red-400"
      : "bg-gray-500";

  const disableButton = !statusCheck ? true : false;

  const buttonText = statusCheck ? "Book me" : "Not available";

  function bookMeHandler() {
    router.query.teamMember = teamId;
    router.query.slug = serviceId;
    router.query.id = variation.itemVariationData.itemId;
    router.push(router).then(() => {
      toast.success(
        `${data.data.teamMember?.givenName} ${data.data.teamMember?.familyName} selected`
      );
      toast.success(`${service} selected`);
      router.push(
        `/book/${router.query.slug}?id=${router.query.id}&teamMember=${router.query.teamMember}`
      );
    });
  }

  return (
    <div className="team w-">
      {status === "error" ? (
        "unable to fetch team member"
      ) : status === "loading" ? (
        "fetching team member..."
      ) : (
        <div
          className={`${showBorder} w-full flex lg:flex-row flex-col justify-between items-center`}
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
            className={`${bookMeClassname} text-white py-1.5 mt-2 lg:py-2 px-4 rounded-md `}
            text={buttonText}
            disabled={disableButton}
            onClick={bookMeHandler}
          />
        </div>
      )}
    </div>
  );
}
