import React from "react";
import thank from "./thank.png";

function About() {
  return (
    <div
      style={{
        fontFamily: "LemonMelon",
        fontSize: "35px",
      }}
    >
      <h1 style={{ paddingTop: "15px" }}>
        {" "}
        | Software Engineer | Neuroscientist |{" "}
      </h1>
      <div>
        <img src={thank} />
      </div>
    </div>
  );
}

export default About;
