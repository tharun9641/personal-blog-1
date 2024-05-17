import { useInView } from "react-intersection-observer";
import "../css/about.css";
import profile from "../logo/tharun-cover.jpg";
import location from "../logo/location.png";
import {
  Languages,
  about_bio,
  about_content,
  countries,
  todo,
} from "../other_asset/data.js";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section id="about">
      <div className="about-container">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          transition={{ delay: 0.5, ease: "linear" }}>
          <div className="about-header">ABOUT</div>
          <div className="about-body">
            <div className="profile-pic">
              <img src={profile} alt="Tharun"></img>
              <div className="profile-text">
                <img src={location} alt="location"></img>
                <h1>London</h1>
              </div>
            </div>
            <div className="about-bio">{about_bio}</div>
          </div>
          <div className="about-content">{about_content}</div>
          <div className="fun-fact">
            <div className="fun-header">Trivia about me</div>
            <span className="fun-sub">Countries I have been to :</span>
            <div className="flags">
              {countries.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index }}>
                    <img src={item} alt="Country Flag" />
                  </motion.div>
                );
              })}
            </div>
            <div>
              <span className="fun-sub">Languages I speak :</span>
              <div>
                {Languages.map((item, index) => {
                  return (
                    <motion.span
                      className="lang"
                      key={index}
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * index }}>
                      {" "}
                      {item}{" "}
                    </motion.span>
                  );
                })}
              </div>
            </div>
            <div>
              <span className="fun-sub">Other interest's :</span>
              <div>
                {todo.map((item, index) => {
                  return (
                    <motion.span
                      className="lang"
                      key={index}
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * index }}>
                      {" "}
                      {item}{" "}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
