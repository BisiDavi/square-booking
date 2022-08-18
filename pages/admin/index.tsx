import AdminLayoutPage from "@/layout/Admin-layout";
import QuickLinks from "@/components/Admin/QuickLinks";
import ActivityOverview from "@/components/Admin/ActivityOverView";

export default function Dashboard() {
  return (
    <AdminLayoutPage>
      <ActivityOverview />
      <QuickLinks />
    </AdminLayoutPage>
  );
}
