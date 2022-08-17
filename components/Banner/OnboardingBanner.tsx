import BannerAnimation from "@/components/Banner/BannerAnimation";

export default function OnboardingBanner() {
  return (
    <div className="w-2/3 h-screen flex flex-col relative flex items-center justify-center bg-site-purple">
      <h3 className="font-bold text-center border-white bg-gray-800 text-4xl px-3 py-2 text-white">
        Bookify
      </h3>
      <p className="font-bold text-2xl text-white text-center mt-4">
        Booking Management made Easy
      </p>
      <BannerAnimation />
    </div>
  );
}
