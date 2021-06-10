import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import {
  useSpring,
  useTransition,
  animated,
  config,
  useTrail,
} from "react-spring";

import { Link } from "react-router-dom";
import navbar from "./navbar.css";

const fontStyle = {
  fontFamily: "CoffeeSigns",
  fontSize: "35px",
  display: "flex",
  flexDirection: "column",
};
let lists = [
  { word: "Welcome", color: "red", opacity: 0.5, trans: 50 },
  { word: "to", color: "blue", opacity: 1, trans: 50 },
  { word: "my", color: "green", opacity: 0.2, trans: 50 },
  { word: "portfolio!", color: "orange", opacity: 0.8, trans: 50 },
];

const NavBar = () => {
  const [isToggled, setToggled] = useState(false);
  const [isToggledRight, setToggledRight] = useState(true);
  const [isList, setList] = useState([]);
  const [on, toggle] = useState(false);

  // const springs = useSprings(
  //   list.length,
  //   list.map((item) => ({
  //     from: { color: "#fff", opacity: 0, transform: "scale(0)" },
  //     to: {
  //       color: item.color,
  //       opacity: item.opacity,
  //       transform: "scale(10px)",
  //     },
  //     delay: 200,
  //   }))
  // );

  useEffect(() => {
    if (isList.length === 0) {
      setTimeout(() => {
        setList(lists);
      }, 1000);
    }
  }, [isList]);

  const fade = useSpring({
    from: {
      // position: "fixed",
      opacity: 0,
      transform: "translate3d(0px,0%,0em)",
    },
    to: {
      opacity: 1,
      transform: "translate3d(0px, 100%, 3em)",
    },
    delay: 200,
    config: config.molasses,
    onRest: () => setList([]),
  });
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
    delay: 500,
    config: config.molasses,
    onRest: () => setList([]),
  });

  // const trail = useSprings(12,
  //   isList.map(item => ({
  //     opacity: 1,
  //     delay: 200,
  //     from: { transform: "translate3d(0,0,0)" },
  //     to: { transform: "translate3d(0,50px,0)" },
  //     config: config.molasses,
  //   }))
  // );

  return (
    <div>
      <div className="aboutStyle">
        <Link to="/about">
          <animated.h1 className="rightbtn" style={fade2}>
            About
          </animated.h1>
        </Link>
      </div>
      {/* <div className="welcome">
        {fade((styles, item) => (
          <animated.h1 style={styles}>{item.word}</animated.h1>
        ))}
      </div> */}
      {lists.map((x) => (
        <animated.h1 style={fade} className="welcome">
          {x.word}
        </animated.h1>
      ))}
      <div className="projectStyle">
        <Link to="/projects">
          <animated.h1 className="leftbtn" style={fade2}>
            {" "}
            Projects
          </animated.h1>
        </Link>{" "}
      </div>
    </div>
  );
};

export default NavBar;
