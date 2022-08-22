/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import { useAppDispatch } from "@/redux/store";
import squareClient from "@/squareClient";
import type { storeProfileType } from "@/types/store-types";
import BookingView from "@/components/View/BookingView";
import { GetServerSidePropsContext } from "next";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { req } = context;
    const merchant = req.cookies.merchant
      ? JSON.parse(req.cookies.merchant)
      : {};

    const { client } = await squareClient(merchant.token);
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
