/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import squareClient from "@/lib/squareClient";
import { useAppDispatch } from "@/redux/store";
import BookCalendar from "@/components/Calendar/BookCalendar";
import { updateStoreProfile } from "@/redux/store-profile-slice";

import type { GetServerSideProps } from "next";
import type { storeProfileType } from "@/types/store-types";

interface Props {
  storeProfile: storeProfileType;
}

export default function BookPage({ storeProfile: storeProfileData }: Props) {
  const dispatch = useAppDispatch();
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  useEffect(() => {
    if (storeProfile === null) {
      dispatch(updateStoreProfile(storeProfileData));
    }
  }, []);

  return (
    <DefaultLayout>
      <div className="content container flex items-center mx-auto py-4">
        <div className="w-3/5">
          <BookCalendar />
        </div>
        <div className="w-1/3 bg-gray-200 h-screen"></div>
      </div>
    </DefaultLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { client } = await squareClient();
  try {
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
