/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { SiSquare } from "react-icons/si";

import OnboardingBanner from "@/components/Banner/OnboardingBanner";
import OnboardingForm from "@/components/Form/OnboardingForm";

export default function OnboardingPage() {
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
          <OnboardingForm />
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
