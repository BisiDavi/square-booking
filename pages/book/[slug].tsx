/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import squareClient from "@/lib/squareClient";
import { useAppDispatch } from "@/redux/store";
import BookCalendar from "@/components/Calendar/BookCalendar";
import { updateStoreProfile } from "@/redux/store-profile-slice";

import type { GetServerSideProps } from "next";
import type { storeProfileType } from "@/types/store-types";
import Button from "@/components/UI/Button";
import { useRouter } from "next/router";

interface Props {
  storeProfile: storeProfileType;
}

export default function BookPage({ storeProfile: storeProfileData }: Props) {
  const dispatch = useAppDispatch();
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  const router = useRouter();

  function goBack() {
    router.back();
  }

  useEffect(() => {
    if (storeProfile === null) {
      dispatch(updateStoreProfile(storeProfileData));
    }
  }, []);

  return (
    <DefaultLayout>
      <div className="content container flex items-start mx-auto py-4 pt-24">
        <div className="w-3/5">
          <Button
            text="back"
            className="rounded-lg px-4 py-2 mb-2 bg-gray-400 text-white font-bold flex items-center hover:bg-gray-500"
            icon={<FaLongArrowAltLeft className="mr-2 text-2xl" />}
            onClick={goBack}
          />
          <h3 className="text-3xl font-medium">
            Please, pick a date for your appointment
          </h3>
          <div className="pill rounded-xl px-5 py-8 border border-gray-500 w-3/4 mt-5">
            <h4 className="text-xl font-bold">Service:</h4>
          </div>
        </div>
        <div className="w-1/3 bg-gray-200 flex items-center justify-center">
          <BookCalendar />
        </div>
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
