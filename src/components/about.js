import { useInView } from "react-intersection-observer";
import "../css/about.css";
import profile from "../logo/tharun-cover.jpg";
import { about_bio, about_content } from "../other_asset/data.js";
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
            </div>
            <div className="about-bio">{about_bio}</div>
          </div>
          <div className="about-content">{about_content}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
