import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!

import AdminLayoutPage from "@/layout/Admin-layout";

export default function CalendarPage() {
  return (
    <AdminLayoutPage>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable
        selectable
      />
    </AdminLayoutPage>
  );
}
