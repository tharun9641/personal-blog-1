import "../css/nav.css";
import { Link } from "react-scroll";
import tp from "../logo/TP.png";
import Logo from "./logo";

const Navbar = () => {
  return (
    <section className="nav-container">
      <div className="nav-block">
        <div className="sub-img">
          <Link to="home" smooth={true} offset={-150}>
            <img src={tp} alt="Tharun-prasad" />
          </Link>
        </div>
        <div className="sub-header">
          <Link to="about" smooth={true} offset={-150}>
            About
          </Link>
        </div>
        <div className="sub-header">
          <Link to="skills" smooth={true} offset={-150}>
            Skills
          </Link>
        </div>
        <div className="sub-header">
          <Link to="experience" smooth={true} offset={-150}>
            Experience
          </Link>
        </div>
        <div className="sub-header">
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </div>
      </div>
      <div style={{ position: "fixed", right: "2.5%", top: "7.5%" }}>
        <Logo />
      </div>
    </section>
  );
};

export default Navbar;
