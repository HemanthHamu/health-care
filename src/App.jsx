import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "../src/components/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
