/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { businessBookingProfile } from "@/requests/postRequests";

import DefaultLayout from "@/layout/Default-layout";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import { obtainAccessToken } from "@/requests/postRequests";
import { updateMerchant } from "@/redux/auth-slice";
import { updateModal } from "@/redux/ui-slice";
import AppLogo from "@/components/Logo/AppLogo";

interface Props {
  storeProfile: storeProfileType;
}

export default function OAUTHPAGE({ storeProfile }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [, setCookie] = useCookies(["merchant"]);

  const squareCode = `${router?.query?.code}`;
  const stateEmail = `${router?.query?.state}`;
  const email =
    stateEmail !== "undefined" ? stateEmail.split("premium")[0] : "";
  const isPremium =
    stateEmail !== "undefined" && stateEmail.split("premiumn").length === 2
      ? true
      : false;

  useEffect(() => {
    if (squareCode !== "undefined" && stateEmail !== "undefined") {
      obtainAccessToken(squareCode, email)
        .then((response) => {
          const parsedData = JSON.parse(response.data);
          const { merchant_id, email, expires_at } = parsedData;
          dispatch(
            updateMerchant({ id: merchant_id, email, expiresAt: expires_at })
          );
          setCookie("merchant", JSON.stringify(parsedData), {
            path: "/",
            maxAge: 604800, // expires in a week
            sameSite: true,
          });

          businessBookingProfile(parsedData.access_token).then((response) => {
            if (response.data.premium && !isPremium) {
              dispatch(updateModal("oauth-premium-modal"));
            }
          });
          router.push("/admin")
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
      <section className="pt-20 w-full mx-auto h-screen justify-center items-center flex flex-col">
        <h1 className="text-center font-bold text-xl">
          Welcome to <AppLogo />
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
