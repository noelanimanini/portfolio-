import React from "react";
import NavBar from "../NavBar/index";
import Projects from "../Projects_layout/index";
import About from "../About/index";
import Skills from "../Skills/index";
import Email from "../Email/index";
import "./home.css";

function Home() {
  return (
    <div className="backGround">
      <div className="glass">
        <NavBar />
        <div style={{ height: "2vh" }}></div>
        <About />
        <div style={{ height: "45vh" }}></div>
        <Skills />
        <div style={{ height: "45vh" }}></div>
        <Projects />
        <div style={{ height: "20vh" }}></div>
        <Email />
      </div>
    </div>
  );
}

export default Home;
