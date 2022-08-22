/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import { useCookies } from "react-cookie";

import DefaultLayout from "@/layout/Default-layout";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
// import { obtainAccessToken } from "@/requests/postRequests";
// import { updateMerchant } from "@/redux/auth-slice";
// import { updateModal } from "@/redux/ui-slice";

interface Props {
  storeProfile: storeProfileType;
}

export default function OAUTHPAGE({ storeProfile }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // const [, setCookie] = useCookies(["merchant"]);

  const squareCode = `${router?.query?.code}`;
  const stateEmail = `${router?.query?.state}`;

  console.log("squareCode", squareCode);
  console.log("stateEmail", stateEmail);

  // useEffect(() => {
  //   if (squareCode && stateEmail) {
  //     obtainAccessToken(squareCode, stateEmail)
  //       .then((response) => {
  //         console.log("response", response);
  //         const parsedData = JSON.parse(response.data);
  //         console.log("parsedData-parse", parsedData);
  //         if (parsedData.premium) {
  //           dispatch(updateModal("oauth-premium-modal"));
  //         }
  //         setCookie("merchant", JSON.stringify(parsedData), {
  //           path: "/",
  //           maxAge: 604800, // expires in a week
  //           sameSite: true,
  //         });
  //         const { merchant_id, email, expires_at } = response?.data;
  //         dispatch(
  //           updateMerchant({ id: merchant_id, email, expiresAt: expires_at })
  //         );
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //         console.log("error-response", error?.response);
  //       });
  //   }
  // }, [squareCode, stateEmail]);

  useEffect(() => {
    dispatch(updateStoreProfile(storeProfile));
  }, []);

  return (
    <DefaultLayout>
      <section className="pt-20 w-full mx-auto h-screen justify-center items-center flex flex-col">
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
