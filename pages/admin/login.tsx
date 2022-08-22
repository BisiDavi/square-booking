/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { SiSquare } from "react-icons/si";

import OnboardingBanner from "@/components/Banner/OnboardingBanner";
import OnboardingForm from "@/components/Form/OnboardingForm";
import AppLogo from "@/components/Logo/AppLogo";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title> Login | Welcome to Bookify | Booking Made Easy </title>
      </Head>
      <main className="w-full h-screen flex items-center">
        <div className="w-1/2 bg-gray-100 flex pt-20  text-center  flex-col relative h-full">
          <AppLogo className="text-4xl mx-auto flex justify-center mb-24" />
          <OnboardingForm type="login" />
          <p className="font-bold text-xs text-red-500 absolute bottom-20 text-left left-10">
            Please enter your email, to login
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
