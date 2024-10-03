import "../css/project.css";
import { Projects } from "../other_asset/data";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section id="projects" className="project-section">
      <motion.div
        className="project-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <motion.div
          className="contact-header"
          initial={{ y: 25 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.25 }}>
          PROJECT
        </motion.div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Game zone</h1>
        </div>
        <div className="project-grid">
          {Projects.map((item, index) => {
            return (
              <motion.div
                className="project-card"
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: index * 0.1, type: "spring" }}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
export default Project;
