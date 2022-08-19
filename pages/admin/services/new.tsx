import AdminLayoutPage from "@/layout/Admin-layout";
import TempCreateServiceForm from "@/components/Form/TempCreateServiceForm";

export default function NewService() {
  return (
    <AdminLayoutPage>
      <>
        <h2 className="text-center font-bold text-3xl py-3">Create Service</h2>
        <TempCreateServiceForm />
      </>
    </AdminLayoutPage>
  );
}
