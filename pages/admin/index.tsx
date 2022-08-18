import ReportCard from "@/components/Card/ReportCard";
import AdminLayoutPage from "@/layout/Admin-layout";

const activityOverview = [
  { text: "Total Bookings", count: 0 },
  { text: "Total Customers", count: 0 },
  { text: "Total Services", count: 0 },
  { text: "Staff Total ", count: 0 },
];

export default function Dashboard() {
  return (
    <AdminLayoutPage>
      <div className="overview flex items-center mt-20">
        {activityOverview.map((item, index) => (
          <ReportCard key={`${item}-${index}`} report={item} />
        ))}
      </div>
    </AdminLayoutPage>
  );
}
