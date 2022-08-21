/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import HomepageBanner from "@/components/Banner/HomepageBanner";
import InfoSection from "@/components/UI/InfoSection";
import MainView from "@/components/View/MainView";
import ServiceIconView from "@/components/View/ServiceIconView";
import DefaultLayout from "@/layout/Default-layout";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import RecommendServices from "@/components/Services/RecommendServices";
import suareClient from "@/squareClient";

interface Props {
  storeProfile: storeProfileType;
}

export default function Home({ storeProfile }: Props) {
  console.log("storeProfile", storeProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storeProfile !== null) {
      dispatch(updateStoreProfile(storeProfile));
    }
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
  try {
    const { client } = await suareClient();
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
