/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import DefaultLayout from "@/layout/Default-layout";
import squareClient from "@/lib/squareClient";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";

interface Props {
  storeProfile: storeProfileType;
}

export default function OAUTHPAGE({ storeProfile }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const squareCode = router.asPath
    .split("?code=")[1]
    .split("&response_type=")[0];

  console.log("router", router);

  useEffect(() => {
    dispatch(updateStoreProfile(storeProfile));
  }, []);

  return (
    <DefaultLayout>
      <section className="pt-20 container mx-auto h-80 justify-center items-center flex flex-col">
        <h1 className="text-center font-bold text-xl">
          Welcome to{" "}
          <span className="border mr-2 p-2 bg-gray-800 text-white">
            {storeProfile.name}
          </span>
          you&#39;re now authorized.
        </h1>
        <h3 className="font-bold text-center mt-10">
          Click on{" "}
          <Link href="/">
            <a className="text-blue-500 underline hover:text-red-500">
              Proceed
            </a>
          </Link>{" "}
          to continue using application.
        </h3>
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const { client } = await squareClient();
  try {
    const response = await client.locationsApi.listLocations();
    return {
      props: {
        storeProfile: response.result.locations
          ? response.result.locations[0]
          : null,
      },
    };
  } catch (error) {
    return {
      props: {
        storeProfile: null,
      },
    };
  }
}