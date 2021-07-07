import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./navbar.css";
import { Nav } from "react-bootstrap";
const NavBar = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <div className="spacing">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="linkStyle"
        >
          <Nav.Link href="#projects" className="dance">
            <li className="aboutStyle">Projects</li>
          </Nav.Link>
          <Nav.Link href="#about" className="dance">
            <li className="aboutStyle">About</li>
          </Nav.Link>
          <Nav.Link href="#contact" className="dance">
            <li className="aboutStyle">Contact</li>
          </Nav.Link>
        </div>
      </div>
      <div className="welcome">
        <li>Crystal Villanueva</li>
      </div>
    </div>
  );
};

export default NavBar;
