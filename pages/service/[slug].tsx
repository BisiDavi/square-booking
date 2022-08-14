import DefaultLayout from "@/layout/Default-layout";
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";
import { serviceItemType } from "@/types/service-type";
import type { GetServerSideProps } from "next";

interface Props {
  service: serviceItemType;
}

export default function ServicePage({ service }: Props) {
  console.log("service", service);
  return (
    <DefaultLayout>
      <section className="service-page">
        <h1 className="font-bold text-xl">{service.itemData.name}</h1>
      </section>
    </DefaultLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { client } = await squareClient();
  const serviceId: string | any = context.query.id;
  try {
    const response = await client.catalogApi.retrieveCatalogObject(serviceId);

    console.log(response.result);
    const serviceResult = formatBigInt(response.result);
    const parsedServiceResult = JSON.parse(serviceResult);

    return {
      props: {
        service: parsedServiceResult.object,
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
