import "./sidebar.css";
import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaUserMd,
  FaChartBar,
  FaComments,
  FaLifeRing,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  const sidebarSections = [
    {
      title: "General",
      items: [
        { label: "Dashboard", icon: <FaTachometerAlt />, isActive: true },
        { label: "History", icon: <FaHistory /> },
        { label: "Calendar", icon: <FaCalendarAlt /> },
        { label: "Appointments", icon: <FaUserMd /> },
        { label: "Statistics", icon: <FaChartBar /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { label: "Chat", icon: <FaComments /> },
        { label: "Support", icon: <FaLifeRing /> },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h2>
          Health<span className="dot">care.</span>
        </h2>

        <nav>
          {sidebarSections.map((section, i) => (
            <div key={i}>
              <p className="section-title">{section.title}</p>
              <ul>
                {section.items.map((item, j) => (
                  <li key={j} className={item.isActive ? "active" : ""}>
                    <span className="sidebar-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <ul>
          <li>
            <span className="sidebar-icon">
              <FaCog />
            </span>
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
