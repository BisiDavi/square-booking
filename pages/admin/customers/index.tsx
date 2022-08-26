import AdminLayoutPage from "@/layout/Admin-layout";
import CustomersTable from "@/components/Tables/CustomersTable";

export default function CustomersPage() {
  return (
    <AdminLayoutPage>
      <CustomersTable />
    </AdminLayoutPage>
  );
}
