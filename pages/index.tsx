import HomepageBanner from "@/components/HomepageBanner";
import InfoSection from "@/components/InfoSection";
import MainView from "@/components/MainView";
import ServiceIconView from "@/components/ServiceIconView";
import DefaultLayout from "@/layout/Default-layout";

export default function Home() {
  return (
    <DefaultLayout>
      <HomepageBanner />
      <ServiceIconView />
      <MainView />
      <InfoSection />
    </DefaultLayout>
  );
}
