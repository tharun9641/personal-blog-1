import { BackEnd, Cloud, Database, FrontEnd } from "../other_asset/data";
import "../css/skill.css";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section id="skills">
      <div className="skill-container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <motion.div
            className="skill-header"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}>
            SKILLS
          </motion.div>
          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">
              <p>Front End :</p>
            </span>
            {FrontEnd.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">
              <p>Back End :</p>
            </span>
            {BackEnd.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">
              <p>Database :</p>
            </span>
            {Database.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">
              <p>Cloud :</p>
            </span>
            {Cloud.map((item, index) => {
              return (
                <motion.div
                  className="skill-item"
                  id={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            className="skill-collection"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="skill-sub">
              <p>CI / CD :</p>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skill;
