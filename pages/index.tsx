import type { GetServerSidePropsContext } from "next";

import HomepageBanner from "@/components/Banner/HomepageBanner";
import InfoSection from "@/components/UI/InfoSection";
import MainView from "@/components/View/MainView";
import ServiceIconView from "@/components/View/ServiceIconView";
import DefaultLayout from "@/layout/Default-layout";
import RecommendServices from "@/components/Services/RecommendServices";

export default function Home() {
  return (
    <DefaultLayout>
      <HomepageBanner />
      <ServiceIconView />
      <RecommendServices />
      <MainView />
      <InfoSection />
    </DefaultLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  if (!req.cookies?.merchant) {
    return {
      redirect: {
        destination: "/onboarding",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
