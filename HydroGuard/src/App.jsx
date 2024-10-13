import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Gap from "./components/Gap";
import Solution from "./components/Solution";
import Objectives from "./components/Objectives";
import Methodology from "./components/Methodology";
import TechologyCloud from "./components/TechologyCloud";
import Milestones from "./components/Milestones";
import Documents from "./components/Documents";
import Presentations from "./components/Presentations";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <Overview />
      <Gap />
      <Solution />
      <Objectives />
      <Methodology />
      <TechologyCloud />
      <Milestones />
      <Documents />
      <Presentations />
      <Team />
      <ContactUs />
    </div>
  );
}

export default App;
