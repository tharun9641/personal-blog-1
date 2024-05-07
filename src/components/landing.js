import "../css/landing.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section>
      <motion.div className="loading-content">
        <motion.div
          className="empty-div"
          initial={{ left: 0 }}
          animate={{ left: "80%", opacity: 0 }}
          transition={{ duration: 0.5 }}>
          Landing Page
        </motion.div>
        <motion.div
          className="loadoing-div"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}>
          Welcome
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
