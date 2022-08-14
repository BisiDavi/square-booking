import { Client, Environment } from "square";

import HomepageBanner from "@/components/HomepageBanner";
import InfoSection from "@/components/InfoSection";
import MainView from "@/components/MainView";
import ServiceIconView from "@/components/ServiceIconView";
import DefaultLayout from "@/layout/Default-layout";
import { storeProfileType } from "@/types/store-types";

interface Props {
  storeProfile: storeProfileType;
}

export default function Home({ storeProfile }: Props) {
  console.log("home", storeProfile);

  return (
    <DefaultLayout>
      <HomepageBanner />
      <ServiceIconView />
      <MainView />
      <InfoSection />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const client = new Client({
    accessToken: process.env.NEXT_PUBLIC_SQUARE_SANDBOX_ACCESS_TOKEN,
    environment: Environment.Sandbox,
  });
  try {
    const response = await client.locationsApi.listLocations();
    return {
      props: {
        storeProfile: response.result.locations
          ? response.result.locations[0]
          : null,
      },
    };
  } catch (error) {
    return {
      props: {
        storeProfile: null,
      },
    };
  }
}
