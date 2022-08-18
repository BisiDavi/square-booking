import ReportCard from "@/components/Card/ReportCard";
import AdminLayoutPage from "@/layout/Admin-layout";

const activityOverview = [
  { text: "Total Bookings", count: 0, icon: "/bookingIcon.png" },
  { text: "Total Customers", count: 0, icon: "/customer.png" },
  { text: "Total Services", count: 0, icon: "/services.png" },
  { text: "Staff Total ", count: 0, icon: "staff.png" },
];

export default function Dashboard() {
  return (
    <AdminLayoutPage>
      <div className="overview flex items-center mt-10">
        {activityOverview.map((item, index) => (
          <ReportCard key={`${item}-${index}`} report={item} />
        ))}
      </div>
      <div className="quick-task mt-4">
        <h3 className="font-medium">Quick Task</h3>
      </div>
    </AdminLayoutPage>
  );
}
