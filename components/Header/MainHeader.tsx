/* eslint-disable @next/next/no-img-element */
import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";
import { useQuery } from "react-query";

import Button from "@/components/UI/Button";
import Logo from "@/components/Logo";
import { listLocations } from "@/requests/getRequests";
import { useAppSelector } from "@/hooks/useRedux";

export default function MainHeader() {
  const { data, status } = useQuery("listLocations", listLocations);
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  const parsedData =
    status === "success" ? JSON.parse(data?.data).locations[0] : null;

  console.log("data", parsedData);

  return (
    <header className="bg-gray-900 py-2 w-full h-30 fixed z-50">
      <div className="container  py-2 flex items-center mx-auto justify-between">
        {storeProfile !== null && storeProfile?.logoUrl ? (
          <Link passHref href="/">
            <a>
              <img
                src={storeProfile?.logoUrl}
                alt="logo"
                height="95px"
                width="95px"
              />
            </a>
          </Link>
        ) : (
          <Logo className="flex mx-auto my-2 lg:m-0" />
        )}
        <div className="button-group hidden lg:flex items-center">
          <Link href="/onboarding" passHref>
            <a>
              <Button
                text="Become a Seller"
                className="text-white flex items-center hover:text-gray-500"
                type="button"
                icon={<BsPersonCircle className="mr-4 text-2xl" />}
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
