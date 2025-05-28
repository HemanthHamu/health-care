import { RxAvatar } from "react-icons/rx";
import "./calendar.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Calendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
  ];

  const appointments = [
    {
      type: "Dentist",
      time: "09:00-11:00",
      doctorName: "Dr. Cameron Williamson",
      isActive: true,
      icon: "🦷",
    },
    {
      type: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctorName: "Dr. Kevin Djones",
      icon: "💪",
    },
  ];
  return (
    <div className="calendar">
      <div className="avatar-container">
        <p className="avatar-icon">
          <RxAvatar />
        </p>
        <p>+</p>
      </div>
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="pagination-icons">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>

      <div className="calendar-days">
        {days.map((day, i) => (
          <div key={i} className="calendar-day">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-dates">
        {dates.map((date, i) => (
          <div
            key={i}
            className={`calendar-date ${date === 26 ? "selected" : ""}`}
          >
            {date}
          </div>
        ))}
      </div>

      <div className="calendar-time-slots">
        {timeSlots.map((slot, i) => (
          <div key={i} className="time-slot">
            {slot}
          </div>
        ))}
      </div>

      <div className="appointments-container">
        {appointments.map((appointment, i) => (
          <div
            key={i}
            className={`${
              appointment.isActive
                ? "active-appointment-details"
                : "appointment-details"
            }`}
          >
            <div className="appointment-header">
              <h5>{appointment.type}</h5>
              <p>{appointment.icon}</p>
            </div>

            <p>{appointment.time}</p>
            <p>{appointment.doctorName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
