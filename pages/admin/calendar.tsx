import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import AdminLayoutPage from "@/layout/Admin-layout";

export default function CalendarPage() {
  return (
    <AdminLayoutPage>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </AdminLayoutPage>
  );
}
