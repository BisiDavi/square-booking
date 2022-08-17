/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import HomepageBanner from "@/components/Banner/HomepageBanner";
import InfoSection from "@/components/UI/InfoSection";
import MainView from "@/components/View/MainView";
import ServiceIconView from "@/components/View/ServiceIconView";
import DefaultLayout from "@/layout/Default-layout";
import { storeProfileType } from "@/types/store-types";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import RecommendServices from "@/components/Services/RecommendServices";
import squareClient from "@/lib/squareClient";

interface Props {
  storeProfile: storeProfileType;
}

export default function Home({ storeProfile }: Props) {
  const router = useRouter();
  const { onboarding } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  console.log("storeProfile", storeProfile);

  useEffect(() => {
    if (!onboarding) {
      router.push("/onboarding");
    }
  }, [onboarding]);

  useEffect(() => {
    if (storeProfile !== null) {
      dispatch(updateStoreProfile(storeProfile));
    } else if (storeProfile === null) {
      toast.warning("Network issues, please check your internet connection ");
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
    const { client } = await squareClient();
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
