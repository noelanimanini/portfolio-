import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Video from "./beach1.mp4";
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
  // { word: "Crystal ", color: "red", opacity: 0.5, trans: 50 },
  { word: "Crystal Villanueva", color: "blue", opacity: 1, trans: 50 },
  // { word: "portfolio", color: "green", opacity: 0.2, trans: 50 },
  // { word: "portfolio!", color: "orange", opacity: 0.8, trans: 50 },
  // { word: "crystal", color: "orange", opacity: 0.8, trans: 50 },
];

const slides = [
  "photo-1517191434949-5e90cd67d2b6",
  "photo-1512951670161-b5c6c632b00e",
  "photo-1533119510849-b64bf60c83c3",
  "photo-1522518961115-07c922089dd4",
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
      transform: "translate3d(0px,0%,-7em)",
    },
    to: {
      opacity: 1,
      transform: "translate3d(0px, 100%, 7em)",
    },
    delay: 300,
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
    delay: 600,
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
      <video autoPlay muted loop id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="glass">
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
        <div className="aboutStyle">
          <Link to="/about">
            <animated.h1 className="rightbtn" style={fade2}>
              About
            </animated.h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
