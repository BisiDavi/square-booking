import { useAppSelector } from "@/hooks/useRedux";
import CreateStaffForm from "@/components/Form/CreateStaffForm";

export default function DashboardRightSidebar() {
  const { sidebar } = useAppSelector((state) => state.UI);

  return (
    <aside className="fixed right-0 top-20 h-screen bg-white w-1/3 shadow border-l">
      {sidebar === "create-staff" && <CreateStaffForm />}
    </aside>
  );
}
