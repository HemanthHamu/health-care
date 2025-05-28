import "./activitychart.css";

export default function ActivityChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = [40, 60, 50, 70, 30, 80, 45];

  return (
    <div className="activity-chart">
      <div className="activity-chart-header">
        <h4>Activity</h4>
        <p>3 appointment on this week</p>
      </div>

      <div className="chart-bars">
        {values.map((val, i) => (
          <div className="bar-group" key={i}>
            <div className="bar" style={{ height: `${val}px` }}></div>
            <span>{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
