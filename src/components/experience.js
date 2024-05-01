import { Container } from "react-bootstrap";
import "../css/experience.css";
import { Exp } from "../other_asset/data";
import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const [showTab, setTab] = useState(null);
  const [isVisible, setVisible] = useState(false);

  const ToggleTab = (e) => {
    if (showTab === e.target.id) {
      setVisible(!isVisible);
    } else {
      setVisible(true);
    }
  };

  return (
    <section id="experience">
      <div className="exp-container">
        <motion.div
          className="exp-header"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}>
          Experience
        </motion.div>
        <Container>
          <div className="exp-content">
            {Exp.map((item, index) => {
              return (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}>
                    <div
                      className="exp-card"
                      id={item.code}
                      onClick={(e) => {
                        ToggleTab(e);
                        setTab(item.code);
                      }}>
                      <img src={item.img} alt={item.code} id={item.code} />
                      <div className="exp-desc" id={item.code}>
                        {item.role}
                        <span id={item.code}>{item.company}</span>
                        <span id={item.code}>{item.time}</span>
                      </div>
                    </div>
                    <div
                      className={
                        showTab === item.code && isVisible
                          ? "collapsible-exp"
                          : "collapsible-collapse"
                      }>
                      {item.exp.map((item, index) => {
                        return (
                          <li key={index}>
                            {item}
                            <br />
                            <br />
                          </li>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Experience;
