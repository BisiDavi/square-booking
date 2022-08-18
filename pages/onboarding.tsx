/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { SiSquare } from "react-icons/si";

import OnboardingBanner from "@/components/Banner/OnboardingBanner";

export default function OnboardingPage() {
  const stateCode = uuidv4();

  const clientID = process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID;

  const squareLink = `https://connect.squareup.com/oauth2/authorize?client_id=${clientID}&scope=APPOINTMENTS_READ+APPOINTMENTS_WRITE+APPOINTMENTS_ALL_READ+APPOINTMENTS_BUSINESS_SETTINGS_READ+ITEMS_READ+ITEMS_WRITE+MERCHANT_PROFILE_READ+MERCHANT_PROFILE_WRITE+EMPLOYEES_WRITE+EMPLOYEES_READ&session=false&state=${stateCode}`;

  return (
    <>
      <Head>
        <title> Welcome to Bookify | Booking Made Easy </title>
      </Head>
      <main className="w-full h-screen flex items-center">
        <div className="w-1/2 bg-gray-100 flex pt-20  text-center  flex-col relative h-full">
          <h3 className="text-center items-center text-2xl font-bold mb-24">
            <span className="font-bold ml-1 text-center border-white bg-gray-800 text-4xl px-3 py-2 text-white">
              Bookify
            </span>
          </h3>
          <h5 className="font-bold">
            Welcome <span className="text-2xl ml-2">🤗</span>
          </h5>
          <h6 className="font-medium my-4">
            Get onboarded with a single click.
          </h6>
          <a
            href={squareLink}
            className="bg-site-purple flex font-medium items-center  mx-auto text-white px-3 py-2 rounded-md hover:bg-blue-500"
          >
            Onboard me
          </a>
          <p className="font-bold text-xs text-red-500 absolute bottom-20 text-left left-10">
            By clicking on &#34;Onboard me&#34;, You will be authorizing this
            application to use your Square account resources.
          </p>
          <div className="square flex items-center absolute bottom-10 left-10">
            <SiSquare className="text-xl mr-2" />
            <p className="font-bold text-xs text-gray-500 ">
              Powered by Square
            </p>
          </div>
        </div>
        <OnboardingBanner />
      </main>
    </>
  );
}
