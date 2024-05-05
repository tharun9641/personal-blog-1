import {
  BackEnd,
  Cloud,
  Database,
  FrontEnd,
  softskills,
  testing,
} from "../other_asset/data";
import "../css/skill.css";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section id="skills">
      <div className="skill-container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <motion.div
            className="skill-header"
            initial={{ y: 25 }}
            whileInView={{ y: 0 }}>
            SKILLS
          </motion.div>
          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">Front End :</span>
            {FrontEnd.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">Back End :</span>
            {BackEnd.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">Database :</span>
            {Database.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">Cloud :</span>
            {Cloud.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">Testing Tools :</span>
            {testing.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">Soft skills :</span>
            {softskills.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skill;
