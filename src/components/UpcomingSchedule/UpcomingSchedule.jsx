import "./upcomingschedule.css";

export default function UpcomingSchedule() {
  const schedule = [
    {
      day: "On Thursday",
      events: [
        { time: "11:00 AM", label: "Health checkup complete", icon: "🩼" },
        { time: "14:00 PM", label: "Ophthalmologist", icon: "👁️" },
      ],
    },
    {
      day: "On Saturday",
      events: [
        { time: "00:00 AM", label: "Cardiologist", icon: "❤️" },
        { time: "16:00 PM", label: "Neurologist", icon: "🧑‍⚕️" },
      ],
    },
  ];

  return (
    <div className="upcoming-schedule">
      <h4>The Upcoming Schedule</h4>
      {schedule.map((item, i) => (
        <div key={i} className="schedule-container">
          <p className="day-label">{item.day}</p>
          <div className="event-card-container">
            {item.events.map((e, j) => (
              <div className="event-card" key={j}>
                <div className="schedule-details-container">
                  <span>{e.label}</span>
                  <p>{e.icon}</p>
                </div>

                <span className="time">{e.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
