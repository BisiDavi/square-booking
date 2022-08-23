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
import BookingModal from "@/components/Modal/BookingModal";
import useUI from "@/hooks/useUI";

interface Props {
  storeProfile: storeProfileType;
}

export default function BookPage({ storeProfile: storeProfileData }: Props) {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  const dispatch = useAppDispatch();
  const { modal, toggleModal } = useUI();

  useEffect(() => {
    if (storeProfile === null) {
      dispatch(updateStoreProfile(storeProfileData));
    }
  }, []);

  function closeModal() {
    toggleModal(null);
  }

  return (
    <>
      {modal === "successful-booking-modal" && (
        <BookingModal modal={modal} toggleModal={closeModal} />
      )}
      <DefaultLayout>
        <BookingView />
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { req } = context;
    const merchant = req.cookies.merchant
      ? JSON.parse(req.cookies.merchant)
      : {};

    const { client } = squareClient(merchant.access_token);
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
