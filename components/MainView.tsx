import GettingStarted from "@/components/GettingStarted";
import SevicesBanner from "@/components/SevicesBanner";

export default function MainView() {
  return (
    <div className="main-view h-96 flex items-center">
      <div className="container flex mx-auto flex-col lg:flex-row">
        <GettingStarted />
        <SevicesBanner />
      </div>
    </div>
  );
}
