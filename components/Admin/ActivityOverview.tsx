import ReportCard from "@/components/Card/ReportCard";
import activities from "@/json/activities.json";

export default function ActivityOverview() {
  return (
    <div className="overview flex items-center mt-10">
      {activities.map((item, index) => (
        <ReportCard key={`${item}-${index}`} report={item} />
      ))}
    </div>
  );
}
