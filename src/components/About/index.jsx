import React from "react";
import crystal from "../images/photo.jpg";
import { AiFillGithub, AiOutlineMedium } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div id="about" className="aboutParent">
      <div className="aboutDiv">
        <h3 className="name">Hi I'm Crystal</h3>
        <div className="aboutBox">
          <img src={crystal} className="aboutImage" alt="profile" />

          <div>
            <p className="bio">
              I'm a Seattle based software engineer with a background in
              neuroscience.
            </p>
            <div className="social">
              <a
                href="https://github.com/noelanimanini"
                className="target"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <AiFillGithub className="socialIcons" />
                <div className="git">Github</div>
              </a>

              <a
                href="https://crystal-villanueva.medium.com/"
                className="target"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <AiOutlineMedium className="socialIcons" />
                <div className="link">Blog</div>
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
  );
}

export default About;
