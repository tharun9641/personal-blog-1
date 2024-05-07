import { Col, Container, Row } from "react-bootstrap";
import "../css/home.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import astro from "../logo/astronaut.jpg";

const Home = () => {
  const title = "Tharun Prasad";
  const role = "Fullstack Developer";
  const scrollRef = useRef(null);

  useEffect(() => {
    document.title = "Tharun Prasad";
  }, []);

  return (
    <section id="home">
      <div className="home-container" ref={scrollRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}>
          <Container>
            <Row>
              <Col>{title}</Col>
            </Row>
            <Row>
              <Col>{role}</Col>
            </Row>
            <Row className="floating-img">
              <img src={astro} alt="floating around..."></img>
            </Row>
          </Container>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
