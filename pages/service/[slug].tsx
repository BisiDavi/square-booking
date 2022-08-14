/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";
import { useAppDispatch } from "@/redux/store";
import { updateStoreProfile } from "@/redux/store-profile-slice";
import ServicePageSidebar from "@/components/Sidebar/ServicePageSidebar";

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

  useEffect(() => {
    if (storeProfile === null) {
      dispatch(updateStoreProfile(storeProfileData));
    }
  }, []);

  return (
    <DefaultLayout>
      <section className="service-page container mx-auto pt-20">
        <h1 className="font-bold text-xl">{service.itemData.name}</h1>
        <div className="content h-screen flex">
          <div className="w-3/4 bg-white"></div>
          <ServicePageSidebar service={service} />
        </div>
      </section>
    </DefaultLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { client } = await squareClient();
  const serviceId: string | any = context.query.id;
  try {
    const response = await client.catalogApi.retrieveCatalogObject(serviceId);
    const storeProfileData = await client.locationsApi.listLocations();

    console.log(response.result);
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
      },
    };
  }
};
