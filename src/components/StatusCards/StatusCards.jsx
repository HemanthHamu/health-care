import { GiLungs, GiBoneKnife } from "react-icons/gi";
import { FaArrowRight, FaTooth } from "react-icons/fa";
import "./statuscards.css";

export default function StatusCards() {
  const data = [
    {
      label: "Lungs",
      date: "Date : 26 Oct 2021",
      color: "#f87171",
      percentage: 70,
    },
    {
      label: "Teeth",
      date: "Date : 26 Oct 2021",
      color: "#34d399",
      percentage: 70,
    },
    {
      label: "Bone",
      date: "Date : 26 Oct 2021",
      color: "#60a5fa",
      percentage: 70,
    },
  ];

  const iconMap = {
    Lungs: <GiLungs className="status-icon" />,
    Teeth: <FaTooth className="status-icon" />,
    Bone: <GiBoneKnife className="status-icon" />,
  };

  return (
    <div className="status-cards">
      {data.map((item, i) => (
        <div className="status-card" key={i}>
          <div className="label">
            {iconMap[item.label]} {item.label}
          </div>
          <div className="date">{item.date}</div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${item.percentage}%`,
                backgroundColor: item.color,
              }}
            ></div>
          </div>
        </div>
      ))}
      <div className="details-container">
        <p>Details</p>
        <FaArrowRight />
      </div>
    </div>
  );
}
