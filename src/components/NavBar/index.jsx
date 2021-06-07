import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import navbar from "./navbar.css";

const fontStyle = {
  fontFamily: "CoffeeSigns",
  fontSize: "35px",
  display: "flex",
  flexDirection: "column",
};

const NavBar = () => {
  const [isToggled, setToggled] = useState(false);
  const fade = useSpring({
    // opacity: isToggled ? 1 : 0,
    // color: isToggled ? "#000" : "green",
    // fontSize: isToggled ? "2rem" : "20em",
    //   transform: isToggled ? "rotate(15deg)" : "rotate(135deg)",
    // });
    // const fade = useSpring({
    // loop: true,
    // {
    //   opacity: 0,
    //   color: "blue",
    // },

    from: {
      // transform: "translate(0)",
      // opacity: 0,
    },
    to: {
      transform: "translateX(50px)",
      // opacity: 1,
    },
  });

  return (
    <div className="navbar">
      <animated.div style={fade}>
        <Link to="/about" style={{ textDecoration: "none" }}>
          {" "}
          About{" "}
        </Link>
      </animated.div>
    </div>
  );
};

export default NavBar;
