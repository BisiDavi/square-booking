/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import type { GetServerSidePropsContext } from "next";

import AdminLayoutPage from "@/layout/Admin-layout";
import QuickLinks from "@/components/Admin/QuickLinks";
import ActivityOverview from "@/components/Admin/ActivityOverview";
import AppointmentView from "@/components/View/AppointmentView";
import squareClient from "@/squareClient";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import { storeProfileType } from "@/types/store-types";

interface Props {
  storeProfile: storeProfileType;
}

export default function Dashboard({ storeProfile }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storeProfile !== null) {
      dispatch(updateStoreProfile(storeProfile));
    }
  }, []);

  return (
    <AdminLayoutPage>
      <ActivityOverview />
      <QuickLinks />
      <AppointmentView />
    </AdminLayoutPage>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  const { client } = await squareClient(merchant.access_token);
  const response = await client.locationsApi.listLocations();

  if (!req?.cookies?.merchant) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      storeProfile: response.result.locations
        ? response.result.locations[0]
        : null,
    },
  };
}
