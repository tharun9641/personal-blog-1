import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skill from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="app-body">
        <div>
          <Home />
        </div>
        <div className="body-content">
          <About />
        </div>

        <div className="body-content">
          <Skill />
        </div>
        <div className="body-content">
          <Experience />
        </div>
        <div className="body-content">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
