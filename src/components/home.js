import { Col, Container, Row } from "react-bootstrap";
import "../css/home.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

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
          transition={{ delay: 0.25, ease: "linear" }}>
          <Container>
            <Row>
              <Col>{title}</Col>
            </Row>
            <Row>
              <Col>{role}</Col>
            </Row>
          </Container>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
