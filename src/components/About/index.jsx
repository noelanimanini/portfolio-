import React from "react";
import thank from "../images/thank.png";
import crystal from "../images/crystal.JPG";
import Skills from "../Skills/index";
import { Image, Card } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import Video from "./video3.mp4";

import {
  useSpring,
  useTransition,
  animated,
  config,
  useTrail,
} from "react-spring";
import about from "./about.css";

function About() {
  const imageStyle = {
    width: "35%",
  };

  const thankImage = {
    width: "30%",
  };

  const fade2 = useSpring({
    from: {
      // position: "fixed",
      opacity: 0,
      transform: "translate3d(0px,0%,0em)",
    },
    to: {
      opacity: 1,
      transform: "translate3d(0px, 100%, 3em)",
    },
    delay: 600,
    config: config.molasses,
  });

  return (
    <div className="bkground">
      {/* <video autoPlay muted loop id="video">
        <source src={Video} type="video/mp4" />
      </video> */}
      <div className="square">
        {/* <animated.div style={fade2} className="name">
          Neuroscientist ||* Software Engineer
        </animated.div> */}
        <div className="projectStyle">
          <Link to="/">
            <animated.h1 className="hmbtn" style={fade2}>
              {" "}
              Home
            </animated.h1>
          </Link>
        </div>
        <div className="textDiv">
          <div className="name">Hello, ny name is Crystal </div>
          <div className="name2">
            {" "}
            I'm a Seattle based software engineer with a background in
            neuroscience.{" "}
            <div className="social">
              <div>
                <a
                  href="https://github.com/noelanimanini"
                  className="target"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <AiFillGithub
                    className="socialIcons"
                    onClick={() => console.log("this works")}
                  />
                  <div className="git">Github</div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/crystal-villanueva-151353145/"
                  className="target"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <AiFillLinkedin className="socialIcons" />
                  <div className="link">Linkedin</div>
                </a>
              </div>
              <div>
                <Link
                  to="/email"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  target="_blank"
                >
                  <MdEmail className="socialIcons" />
                  <div className="email"> Email </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <Image src={crystal} className="crystal" roundedCircle /> */}
        <div className="skills">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
