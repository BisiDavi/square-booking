import AppointmentTable from "@/components/Tables/AppointmentTable";

export default function AppointmentView() {
  return (
    <div className="my-4">
      <h3 className="font-medium my-3 mt-6 text-2xl">Upcoming Appointments</h3>
      <AppointmentTable />
    </div>
  );
}
