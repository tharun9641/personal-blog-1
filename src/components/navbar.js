import "../css/nav.css";
import { Link } from "react-scroll";
import tp from "../logo/TP.png";
import Logo from "./logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const CheckDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  useEffect(() => {
    setMobile(CheckDevice());
  }, []);
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
        {/* <div className="sub-header">
          <Link to="projects" smooth={true} offset={-150}>
            Project
          </Link>
        </div> */}
        <div className="sub-header">
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </div>
        {!isMobile && (
          <div className="sub-translate">
            <div className="sub-header">Translate</div>
            <div className="sub-item">
              <div className="sub-header">
                <a href="https://tharunprasad.netlify.app/">English</a>
              </div>
              <div className="sub-header">
                <a href="https://tharunprasad-netlify-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=en&_x_tr_pto=wapp">
                  German
                </a>
              </div>
              <div className="sub-header">
                <a href="https://tharunprasad-netlify-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en&_x_tr_pto=wapp">
                  Mandarin
                </a>
              </div>
              <div className="sub-header">
                <a href="https://tharunprasad-netlify-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=en&_x_tr_pto=wapp">
                  Japanese
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ position: "fixed", right: "2.5%", top: "7.5%" }}>
        <Logo />
      </div>
    </section>
  );
};

export default Navbar;
