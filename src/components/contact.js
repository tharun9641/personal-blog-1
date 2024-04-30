import "../css/contact.css";
import github from "../logo/github.png";
import gmail from "../logo/gmail.png";
import linkedin from "../logo/linkedin.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-conatiner">
        <div className="contact-header">CONTACT</div>
        <div className="contact-set">
          <p>
            {" "}
            Thanks for visiting my site, if you like to get it touch with me
            click one of the below!
          </p>
          <div className="icon">
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
