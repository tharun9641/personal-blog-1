import "../css/nav.css";
import { Link } from "react-scroll";
import tp from "../logo/TP.png";

const Navbar = () => {
  return (
    <section className="nav-container">
      <div className="nav-block">
        <div className="sub-header">
          <Link to="home" smooth={true}>
            <img src={tp} alt="" />
          </Link>
        </div>
        <div className="sub-header">
          <Link to="about" smooth={true}>
            About
          </Link>
        </div>
        <div className="sub-header">
          <Link to="skills" smooth={true}>
            Skills
          </Link>
        </div>
        <div className="sub-header">
          <Link to="experience" smooth={true}>
            Experience
          </Link>
        </div>
        <div className="sub-header">
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
