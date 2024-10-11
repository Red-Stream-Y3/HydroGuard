import "./App.css";
import Header from "./components/Header";
import Team from "./components/Team";
import TechologyCloud from "./components/TechologyCloud";
import Documents from "./components/Documents";
import Presentations from "./components/Presentations";
import Milestones from "./components/Milestones";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Milestones />
      <TechologyCloud />
      <Documents />
      <Presentations />
      <Team />
    </div>
  );
}

export default App;
