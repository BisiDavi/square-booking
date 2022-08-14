import { Client, Environment } from "square";
import { useEffect } from "react";

import HomepageBanner from "@/components/HomepageBanner";
import InfoSection from "@/components/InfoSection";
import MainView from "@/components/MainView";
import ServiceIconView from "@/components/ServiceIconView";
import DefaultLayout from "@/layout/Default-layout";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import RecommendServices from "@/components/Services/RecommendServices";

interface Props {
  storeProfile: storeProfileType;
}

// function listServices() {
//   return axios.get("/api/catalog/search-catalog-items");
// }

export default function Home({ storeProfile }: Props) {
  // const { data } = useQuery("listServices", listServices);

  // console.log("data", JSON.parse(data?.data));
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateStoreProfile(storeProfile));
  }, []);

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
