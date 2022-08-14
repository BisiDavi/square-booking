/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import HomepageBanner from "@/components/Banner/HomepageBanner";
import InfoSection from "@/components/InfoSection";
import MainView from "@/components/View/MainView";
import ServiceIconView from "@/components/ServiceIconView";
import DefaultLayout from "@/layout/Default-layout";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import RecommendServices from "@/components/Services/RecommendServices";
import squareClient from "@/lib/squareClient";

interface Props {
  storeProfile: storeProfileType;
}

export default function Home({ storeProfile }: Props) {
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
  const { client } = await squareClient();
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
