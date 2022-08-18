import { PropsWithChildren } from "react";

import AdminHeader from "@/components/Header/AdminHeader";
import DashboardSidebar from "@/components/Sidebar/DashboardSidebar";

export default function AdminLayoutPage({ children }: PropsWithChildren<{}>) {
  return (
    <main className="relative">
      <AdminHeader />
      <section className="flex items-center w-full relative">
        <DashboardSidebar />
        <div className="wrapper bg-gray-200 h-screen w-3/4 absolute px-4">
          {children}
        </div>
      </section>
      <style jsx>
        {`
          .wrapper {
            right: 0px;
            top: 80px;
          }
        `}
      </style>
    </main>
  );
}
