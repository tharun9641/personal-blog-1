import { Container, Row } from "react-bootstrap";
import "../css/experience.css";
import { Exp, exp_set, exp_se, exp_sse, exp_foh } from "../other_asset/data";
import { useState } from "react";
import { useCallback } from "react";
import SE from "../logo/SE.jpg";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [getRole, setRole] = useState({
    code: "",
    role: "",
    time: "",
    company: "",
    location: "",
  });

  const ShowRole = useCallback((e) => {
    let idx = e.target.id;
    setRole({
      code: Exp[idx].code,
      role: Exp[idx].role,
      time: Exp[idx].time,
      company: Exp[idx].company,
      location: Exp[idx].location,
    });
  }, []);

  useEffect(() => {
    setRole({
      code: Exp[0].code,
      role: Exp[0].role,
      time: Exp[0].time,
      company: Exp[0].company,
      location: Exp[0].location,
    });
  }, []);

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
          <Row>
            <div className="exp-content">
              {Exp.map((item, index) => {
                return (
                  <motion.div
                    className="exp-card"
                    key={item.index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}>
                    <img
                      src={SE}
                      alt={item.code}
                      id={index}
                      onClick={ShowRole}></img>
                    <div className="exp-desc" id={index} onClick={ShowRole}>
                      {item.role}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Row>
          <Row>
            <div className="exp-display">
              {getRole.code === "SET" && (
                <div className="set">
                  <div className="set-title">
                    {getRole.role}
                    <span>{getRole.company}</span>
                    <span className="set-time">{getRole.time}</span>
                  </div>
                  {exp_set.map((item) => {
                    return (
                      <li>
                        {item}
                        <br />
                        <br />
                      </li>
                    );
                  })}
                </div>
              )}
              {getRole.code === "SE" && (
                <div className="set">
                  <div className="set-title">
                    {getRole.role}
                    <span>{getRole.company}</span>
                    <span className="set-time">{getRole.time}</span>
                  </div>
                  {exp_se.map((item) => {
                    return (
                      <li>
                        {item}
                        <br />
                        <br />
                      </li>
                    );
                  })}
                </div>
              )}
              {getRole.code === "SSE" && (
                <div className="set">
                  <div className="set-title">
                    {getRole.role}
                    <span>{getRole.company}</span>
                    <span className="set-time">{getRole.time}</span>
                  </div>
                  {exp_sse.map((item) => {
                    return (
                      <li>
                        {item}
                        <br />
                        <br />
                      </li>
                    );
                  })}
                </div>
              )}
              {getRole.code === "FOH" && (
                <div className="set">
                  <div className="set-title">
                    {getRole.role}
                    <span>{getRole.company}</span>
                    <span className="set-time">{getRole.time}</span>
                  </div>
                  {exp_foh.map((item) => {
                    return (
                      <li>
                        {item}
                        <br />
                        <br />
                      </li>
                    );
                  })}
                </div>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Experience;
