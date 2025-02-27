import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skill from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import { motion } from "framer-motion";
import Project from "./components/project";
//import { useEffect, useState } from "react";

function App() {
  //const [getLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 2500);
  // }, []);
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}>
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="app-body">
        <div className="body-content">
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
        {/* <div className="body-content">
          <Project />
        </div> */}
      </div>
    </motion.div>
  );
}
export default App;
