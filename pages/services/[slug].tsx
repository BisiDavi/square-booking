/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";
import { useAppDispatch } from "@/redux/store";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import ServicePageSidebar from "@/components/Sidebar/ServicePageSidebar";
import ServicePageMain from "@/components/Services/ServicePageMain";

import type { GetServerSideProps } from "next";
import type { serviceItemType } from "@/types/service-type";
import type { storeProfileType } from "@/types/store-types";

interface Props {
  service: serviceItemType;
  storeProfile: storeProfileType;
}

export default function ServicePage({
  service,
  storeProfile: storeProfileData,
}: Props) {
  const dispatch = useAppDispatch();
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  console.log("service", service);

  useEffect(() => {
    if (storeProfile === null) {
      dispatch(updateStoreProfile(storeProfileData));
    }
  }, []);

  return (
    <DefaultLayout>
      <main className="service-page container mx-auto pt-4">
        <div className="content lg:flex flex-col py-4 justify-between relative w-full">
          <ServicePageMain service={service} />
          <ServicePageSidebar service={service} />
        </div>
      </main>
    </DefaultLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context;
  try {
    const merchant = req.cookies.merchant
      ? JSON.parse(req.cookies.merchant)
      : {};
    const { client } = squareClient(merchant.access_token);
    const serviceId: string | any = query.id;
    const response = await client.catalogApi.retrieveCatalogObject(serviceId);
    const storeProfileData = await client.locationsApi.listLocations();

    const serviceResult = formatBigInt(response.result);
    const parsedServiceResult = JSON.parse(serviceResult);

    return {
      props: {
        service: parsedServiceResult.object,
        storeProfile: storeProfileData.result.locations
          ? storeProfileData.result.locations[0]
          : null,
      },
    };
  } catch (error) {
    return {
      props: {
        service: null,
        storeProfileData: null,
      },
    };
  }
};
