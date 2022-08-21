import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { FaLongArrowAltLeft } from "react-icons/fa";

import AdminHeader from "@/components/Header/AdminHeader";
import DashboardSidebar from "@/components/Sidebar/DashboardSidebar";
import DashboardRightSidebar from "@/components/Sidebar/DashboardRightSidebar";
import { useAppSelector } from "@/hooks/useRedux";
import Button from "@/components/UI/Button";

export default function AdminLayoutPage({ children }: PropsWithChildren<{}>) {
  const { sidebar } = useAppSelector((state) => state.UI);
  const router = useRouter();

  function gobBack() {
    router.back();
  }

  return (
    <main>
      <AdminHeader />
      <section className="flex items-center w-full relative">
        <DashboardSidebar />
        <div className="wrapper bg-gray-100 w-4/5 absolute px-6">
          {router.asPath !== "/admin" && (
            <Button
              className="bg-gray-400 text-white px-2 mt-4 rounded-lg flex  items-center py-1 hover:bg-gray-300"
              text="back"
              icon={<FaLongArrowAltLeft className="mr-1" />}
              onClick={gobBack}
            />
          )}
          {children}
        </div>
        {sidebar && <DashboardRightSidebar />}
      </section>
      <style jsx>
        {`
          .wrapper {
            right: 0px;
            top: 80px;
            height: 90vh;
            overflow-y: scroll;
          }
        `}
      </style>
    </main>
  );
}
