import github from "../logo/github.png";
import gmail from "../logo/gmail.png";
import linkedin from "../logo/linkedin.png";
import share from "../logo/share.png";
import "../css/logo.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const [getImage, setImage] = useState(false);

  useEffect(() => {
    const logo = document.getElementById("logo");
    setTimeout(() => {
      logo.click();
      console.log("item clicked");
    }, 1500);
  }, []);

  const ShowIcon = () => {
    setImage(!getImage);
  };
  return (
    <section className="section-logo">
      <div className="logo-container">
        <div className="fixed-logo" onClick={ShowIcon}>
          <motion.img
            src={share}
            id="logo"
            alt="share"
            animate={getImage ? { rotate: "360deg" } : { rotate: "0deg" }}
            transition={{ duration: 0.5 }}></motion.img>
        </div>
        <motion.div
          className="fixed-logo-1"
          animate={
            getImage ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: -20 }
          }
          transition={{ duration: 0.125 }}>
          <a
            href="https://www.linkedin.com/in/tharun-prasad/"
            target="_blank"
            rel="noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
        </motion.div>

        <motion.div
          className="fixed-logo-1"
          animate={
            getImage ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: -20 }
          }
          transition={{ duration: 0.125, delay: 0.1 }}>
          <a
            href="https://github.com/tharun9641"
            target="_blank"
            rel="noreferrer">
            <img src={github} alt="Github"></img>
          </a>
        </motion.div>
        <motion.div
          className="fixed-logo-1"
          animate={
            getImage ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: -20 }
          }
          transition={{ duration: 0.125, delay: 0.2 }}>
          <a href="mailto:tharunprasad1996@gmail.com">
            <img src={gmail} alt="Gmail"></img>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Logo;
