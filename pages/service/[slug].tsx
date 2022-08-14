/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "@/hooks/useRedux";
import DefaultLayout from "@/layout/Default-layout";
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";
import { useAppDispatch } from "@/redux/store";
import { updateStoreProfile } from "@/redux/store-profile-slice";

import type { GetServerSideProps } from "next";
import type { serviceItemType } from "@/types/service-type";
import type { storeProfileType } from "@/types/store-types";
import { BsPhone } from "react-icons/bs";
import formatTime from "@/lib/formatTime";
import formatDays from "@/lib/formatDays";

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
          <div className="w-1/4 bg-gray-200 rounded-lg px-4 py-2">
            <h6 className="text-md pt-2 text-gray-600 font-bold">ABOUT US</h6>
            <p className="pt-1 pb-8">{service.itemData.description}</p>
            <h6 className="text-md py-1  text-gray-600 font-bold">
              CONTACT & BUSINESS HOURS
            </h6>
            <hr className="w-full bg-gray-400 h-1" />
            <div className="call flex items-center justify-between py-4">
              <div className="flex items-center">
                <BsPhone className="mr-2" /> <p>{storeProfile?.phoneNumber}</p>
              </div>
              <div className="dial-phone font-medium text-center bg-white border border-gray-100 rounded w-1/6 hover:bg-gray-100">
                <a
                  className="text-md"
                  href={`tel:+${storeProfile?.phoneNumber}`}
                >
                  Call
                </a>
              </div>
            </div>
            <hr className="w-full bg-gray-400 h-1" />
            <ul className="opening-days mt-4">
              {storeProfile?.businessHours.periods.map((period) => (
                <li
                  key={period.dayOfWeek}
                  className="text-sm flex justify-between py-1"
                >
                  {formatDays(period.dayOfWeek)}{" "}
                  <span>
                    {period.startLocalTime} AM -{" "}
                    {formatTime(period.endLocalTime)} PM{" "}
                  </span>
                </li>
              ))}
            </ul>
          </div>
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
