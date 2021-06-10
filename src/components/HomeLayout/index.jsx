import React from "react";
import Banner from "../Banner/index";
import Skills from "../Skills/index";
import Projects_layout from "../Projects_layout/index";

function HomeLayout() {
  return (
    <div>
      {/* <Banner /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Skills />
        <Projects_layout />
      </div>
    </div>
  );
}

export default HomeLayout;
