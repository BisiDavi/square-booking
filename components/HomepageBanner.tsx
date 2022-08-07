import BannerTypewriter from "@/components/BannerTypewriter";
import HomepageSlider from "@/components/HomepageSlider";

export default function HomepageBanner() {
  return (
    <div className="w-full flex">
      <HomepageSlider />
      <BannerTypewriter />
    </div>
  );
}
