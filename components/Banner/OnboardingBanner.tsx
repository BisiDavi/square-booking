import BannerAnimation from "@/components/Banner/BannerAnimation";
import AppLogo from "@/components/Logo/AppLogo";
import OnboardingForm from "../Form/OnboardingForm";

export default function OnboardingBanner() {
  return (
    <div className="w-screen lg:w-2/3 h-screen flex flex-col relative flex items-center justify-center bg-site-purple">
      <AppLogo className="text-4xl" />
      <p className="font-bold text-2xl text-white text-center mt-4">
        Booking Management made Easy
      </p>
      <div className="lg:hidden w-5/6 z-50">
        <OnboardingForm />
      </div>
      <BannerAnimation />
    </div>
  );
}
