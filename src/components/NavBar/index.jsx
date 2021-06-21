import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-vanilla-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="backGround">
      <div className="glass">
        <div className="spacing">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Link to="/projects" className="linkStyle">
              <Tilt style={{ height: "1px", width: "1px" }}>
                <li className="projectStyle">Projects</li>
              </Tilt>
            </Link>
          </div>
          <div data-aos="fade-down" className="welcome">
            <li>Crystal Villanueva</li>
          </div>

          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Link to="/about" className="linkStyle">
              <Tilt style={{ height: "1px", width: "1px" }}>
                <li className="aboutStyle">About</li>
              </Tilt>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
