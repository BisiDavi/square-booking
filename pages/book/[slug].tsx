/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import { useAppDispatch } from "@/redux/store";
import userSquareClient from "@/square/user";
import type { storeProfileType } from "@/types/store-types";
import BookingView from "@/components/View/BookingView";

interface Props {
  storeProfile: storeProfileType;
}

export default function BookPage({ storeProfile: storeProfileData }: Props) {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storeProfile === null) {
      dispatch(updateStoreProfile(storeProfileData));
    }
  }, []);

  return (
    <DefaultLayout>
      <BookingView />
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  try {
    const { client } = await userSquareClient();
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
