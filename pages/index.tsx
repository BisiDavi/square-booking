import MainView from "@/components/MainView";
import DefaultLayout from "@/layout/default-layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <MainView />
    </DefaultLayout>
  );
};

export default Home;
