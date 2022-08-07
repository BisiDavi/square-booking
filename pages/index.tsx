import HomepageBanner from "@/components/HomepageBanner";
import MainView from "@/components/MainView";
import DefaultLayout from "@/layout/default-layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomepageBanner />
      <MainView />
    </DefaultLayout>
  );
};

export default Home;
