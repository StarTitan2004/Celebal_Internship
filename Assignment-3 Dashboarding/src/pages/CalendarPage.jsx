import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function CalendarPage() {
  return (
    <div>
      <h2>📅 Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[{ title: 'Meeting', date: '2025-06-10' }]}
      />
    </div>
  );
}
