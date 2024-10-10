import "./App.css";
import Header from "./components/Header";
import Team from "./components/Team";
import TechologyCloud from "./components/TechologyCloud";

function App() {
  return (
    // gradient background
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <TechologyCloud />
      <Team />
    </div>
  );
}

export default App;
