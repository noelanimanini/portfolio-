import React from "react";
import Tilt from "react-vanilla-tilt";
import projects from "../../projects.js";
import project from "./projectstyle.css";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="backGround">
      <div className="glass">
        <div className="parent">
          <Link to="/" className="linkStyle">
            <li className="homeStyle2">Home</li>
          </Link>

          <div className="projectLayout">
            {projects.map((x) => (
              <div className="item">
                <img src={x.image} />
                <div className="projectName">{x.name} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
