import React from "react";
import thank from "../images/thank.png";
import crystal from "../images/crystal2.jpg";
import Skills from "../Skills/index";
import { Image, Card } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";
import "./about.css";

function About() {
  return (
    <div className="bkground">
      <div className="square">
        <p>Hi I'm Crystal</p>
        <div style={{ display: "flex" }}>
          <div className="back">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1 className="hmbtn"> Home</h1>
            </Link>
          </div>
          <div className="textDiv">
            <div className="skills">
              <Skills />
            </div>
            <div className="name">
              {/* <Image src={crystal} style={{ width: "40%" }} roundedCircle /> */}

              <div className="bio">
                <Image
                  src={crystal}
                  style={{ width: "45%", height: "10%" }}
                  roundedCircle
                />
                I'm a Seattle based software engineer with a background in
                neuroscience.
              </div>

              <div className="social">
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
      </div>
    </div>
  );
}

export default About;
