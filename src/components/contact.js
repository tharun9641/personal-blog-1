import "../css/contact.css";
import github from "../logo/github.png";
import gmail from "../logo/gmail.png";
import linkedin from "../logo/linkedin.png";
import discord from "../logo/discord.png";
import share from "../logo/share.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [getImage, setImage] = useState(false);

  const ShowIcon = () => {
    console.log("clicked");
    setImage(!getImage);
  };
  return (
    <section id="contact">
      <div className="contact-conatiner">
        <div className="contact-header">CONTACT</div>
        <div className="contact-set">
          <p>
            Thank you for visiting my website! Connect with Me I'd love to hear
            from you. Please click below to get in touch.
          </p>
          {/* Please click on one of the options below to get in touch. */}
          {/* <div className="icon">
            <motion.div
              className="social-link"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.05 }}>
              <a
                href="https://www.linkedin.com/in/tharun-prasad/"
                target="_blank"
                rel="noreferrer">
                <img src={linkedin} alt="linkedin" />
              </a>
            </motion.div>
            <motion.div
              className="social-link"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1 }}>
              <a
                href="https://github.com/tharun9641"
                target="_blank"
                rel="noreferrer">
                <img src={github} alt="Github"></img>
              </a>
            </motion.div>
            <motion.div
              className="social-link"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15 }}>
              <a href="mailto:tharunprasad1996@gmail.com">
                <img src={gmail} alt="Gmail"></img>
              </a>
            </motion.div>
          </div> */}
          <div className="icon-container">
            <div>
              <motion.div
                className="main-icon"
                animate={
                  getImage
                    ? { opacity: 1, x: 10, y: 10 }
                    : { opacity: 0, x: 50, y: 50 }
                }
                transition={{ duration: 0.5 }}>
                <a
                  href="https://www.linkedin.com/in/tharun-prasad/"
                  target="_blank"
                  rel="noreferrer">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </motion.div>
              <motion.div
                className="main-icon"
                animate={
                  getImage
                    ? { opacity: 1, x: -10, y: 10 }
                    : { opacity: 0, x: -50, y: 50 }
                }
                transition={{ duration: 0.5 }}>
                <a
                  href="https://github.com/tharun9641"
                  target="_blank"
                  rel="noreferrer">
                  <img src={github} alt="Github"></img>
                </a>
              </motion.div>
            </div>
            <div>
              <motion.div
                className="connect-icon"
                onClick={ShowIcon}
                animate={getImage ? { rotate: "360deg" } : { rotate: "0deg" }}
                transition={{ duration: 0.5 }}>
                <img src={share} alt="share"></img>
              </motion.div>
            </div>
            <div>
              <motion.div
                className="main-icon"
                animate={
                  getImage
                    ? { opacity: 1, x: 10, y: -10 }
                    : { opacity: 0, x: 50, y: -50 }
                }
                transition={{ duration: 0.5 }}>
                <a
                  href="https://discordapp.com/users/895343036924592148"
                  target="_blank"
                  rel="noreferrer">
                  <img src={discord} alt="discord" />
                </a>
              </motion.div>
              <motion.div
                className="main-icon"
                animate={
                  getImage
                    ? { opacity: 1, x: -10, y: -10 }
                    : { opacity: 0, x: -50, y: -50 }
                }
                transition={{ duration: 0.5 }}>
                <a href="mailto:tharunprasad1996@gmail.com">
                  <img src={gmail} alt="Gmail"></img>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
