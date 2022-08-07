import Banner from "@/components/Banner1";
import HomepageBanner from "@/components/HomepageBanner";
import MainView from "@/components/MainView";
import ServiceIconView from "@/components/ServiceIconView";
import DefaultLayout from "@/layout/default-layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      {/* <HomepageBanner /> */}
      <Banner />
      <ServiceIconView />
      <MainView />
    </DefaultLayout>
  );
};

export default Home;
