import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-vanilla-tilt";
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
    <div className="spacing">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="linkStyle"
      >
        <Nav.Link href="#projects" className="linkStyle">
          <li className="projectStyle">Projects</li>
        </Nav.Link>
        <Nav.Link href="#about" className="linkStyle">
          <li className="aboutStyle">About</li>
        </Nav.Link>
        <Nav.Link href="#contact" className="linkStyle">
          <li className="aboutStyle">Contact</li>
        </Nav.Link>
      </div>
      <div data-aos="fade-down" className="welcome">
        <li>Crystal Villanueva</li>
      </div>
    </div>
  );
};

export default NavBar;
