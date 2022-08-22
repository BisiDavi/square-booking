import type { GetServerSidePropsContext } from "next";

import AdminLayoutPage from "@/layout/Admin-layout";
import QuickLinks from "@/components/Admin/QuickLinks";
import ActivityOverview from "@/components/Admin/ActivityOverview";
import AppointmentView from "@/components/View/AppointmentView";

export default function Dashboard() {
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

  if (!req.cookies?.admin) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
