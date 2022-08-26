import AdminLayoutPage from "@/layout/Admin-layout";
import CreateServiceForm from "@/components/Form/CreateServiceForm";

export default function NewService() {
  return (
    <AdminLayoutPage>
      <CreateServiceForm />
    </AdminLayoutPage>
  );
}
