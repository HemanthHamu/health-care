import "./dashboard.css";
import BodyDiagram from "../BodyDiagram/BodyDiagram";
import StatusCards from "../StatusCards/StatusCards";
import ActivityChart from "../ActivityChart/ActivityChart";
import Calendar from "../Calendar/Calendar";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import { IoIosNotifications } from "react-icons/io";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="left-column">
          <div className="dashboard-header">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <span className="notification-icon">
                <IoIosNotifications />
              </span>
            </div>

            <div className="dashboard-text-container">
              <h2>Dashboard</h2>
              <p>This Week &#9662;</p>
            </div>
          </div>
          <div className="body-status-container">
            <BodyDiagram />
            <StatusCards />
          </div>

          <ActivityChart />
        </div>

        <div className="right-column">
          <Calendar />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}
