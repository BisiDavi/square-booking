import { useAppSelector } from "@/hooks/useRedux";

export default function DashboardRightSidebar() {
  const { sidebar } = useAppSelector((state) => state.UI);

  return (
    <aside className="fixed right-0 top-20 h-screen bg-white w-1/3 shadow border-l">
      {sidebar === "create-staff" && <h2>StaffSidebar page</h2>}
    </aside>
  );
}
