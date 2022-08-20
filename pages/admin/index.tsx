// import { GetServerSidePropsContext } from "next";
import AdminLayoutPage from "@/layout/Admin-layout";
import QuickLinks from "@/components/Admin/QuickLinks";
import ActivityOverview from "@/components/Admin/ActivityOverview";

export default function Dashboard() {
  return (
    <AdminLayoutPage>
      <ActivityOverview />
      <QuickLinks />
    </AdminLayoutPage>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { req } = context;
//   const merchant = req.cookies?.merchant
//     ? JSON.parse(req.cookies?.merchant)
//     : {};

//   if (!merchant?.token) {
//     return {
//       redirect: {
//         destination: "/onboarding",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }
