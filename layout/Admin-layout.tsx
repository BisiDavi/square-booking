import { PropsWithChildren } from "react";

import AdminHeader from "@/components/Header/AdminHeader";
import DashboardSidebar from "@/components/Sidebar/DashboardSidebar";
import DashboardRightSidebar from "@/components/Sidebar/DashboardRightSidebar";
import { useAppSelector } from "@/hooks/useRedux";

export default function AdminLayoutPage({ children }: PropsWithChildren<{}>) {
  const { sidebar } = useAppSelector((state) => state.UI);
  return (
    <main>
      <AdminHeader />
      <section className="flex items-center w-full relative">
        <DashboardSidebar />
        <div className="wrapper bg-gray-100 w-4/5 absolute px-6">
          {children}
        </div>
        {sidebar && <DashboardRightSidebar />}
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
