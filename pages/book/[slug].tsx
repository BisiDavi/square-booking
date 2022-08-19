/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import squareClient from "@/lib/squareClient";
import { useAppDispatch } from "@/redux/store";

import type { GetServerSideProps, GetServerSidePropsContext } from "next";
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { req } = context;
  try {
    const merchant = req.cookies.merchant
      ? JSON.parse(req.cookies.merchant)
      : {};

    const { client } = await squareClient(merchant.token);
    const storeProfileData = await client.locationsApi.listLocations();

    return {
      props: {
        storeProfile: storeProfileData.result.locations
          ? storeProfileData.result.locations[0]
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
};
