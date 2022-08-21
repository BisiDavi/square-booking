/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import type { GetServerSidePropsContext } from "next";

import DefaultLayout from "@/layout/Default-layout";
import squareClient from "@/squareClient";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import { obtainAccessToken } from "@/requests/postRequests";
import { updateMerchant, updateOnboarding } from "@/redux/auth-slice";

interface Props {
  storeProfile: storeProfileType;
}

export default function OAUTHPAGE({ storeProfile }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [, setCookie] = useCookies(["merchant"]);

  const squareCode = `${router?.query?.code}`;
  const stateEmail = `${router?.query?.state}`;

  useEffect(() => {
    if (squareCode && stateEmail) {
      obtainAccessToken(squareCode, stateEmail)
        .then((response) => {
          setCookie("merchant", JSON.stringify(response.data), {
            path: "/",
            maxAge: 604800, // expires in a week
            sameSite: true,
          });
          const { id, email, expiresAt } = response?.data;
          dispatch(updateOnboarding(true));
          dispatch(updateMerchant({ id, email, expiresAt }));
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [squareCode, stateEmail]);

  useEffect(() => {
    dispatch(updateStoreProfile(storeProfile));
  }, []);

  return (
    <DefaultLayout>
      <section className="pt-20 container mx-auto h-80 justify-center items-center flex flex-col">
        <h1 className="text-center font-bold text-xl">
          Welcome to{" "}
          <span className="border mr-2 p-2 bg-gray-800 text-white">
            {storeProfile?.name}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  try {
    const merchant = req.cookies?.merchant
      ? JSON.parse(req.cookies?.merchant)
      : {};
    const { client } = await squareClient(merchant.token);
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
