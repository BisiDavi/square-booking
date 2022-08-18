import { PropsWithChildren } from "react";

import AdminHeader from "@/components/Header/AdminHeader";
import DashboardSidebar from "@/components/Sidebar/DashboardSidebar";

export default function AdminLayoutPage({ children }: PropsWithChildren<{}>) {
  return (
    <main className="relative">
      <AdminHeader />
      <section className="flex items-center">
        <DashboardSidebar />
        <div className="wrapper w-full">{children}</div>
      </section>
    </main>
  );
}
