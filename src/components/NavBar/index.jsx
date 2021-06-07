import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import navbar from "./navbar.css";

const fontStyle = {
  fontFamily: "CoffeeSigns",
  fontSize: "35px",
  display: "flex",
  flexDirection: "column",
};

const parent = {
  backgroundColor: "#f8edeb",
  height: "6vh",
};

const NavBar = () => {
  const [items, setItems] = useState();
  return (
    <div className="parent">
      <Navbar expand="lg">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggleClass"
        />
        <Navbar.Collapse className="navCollapse">
          <Nav className="navDiv">
            <Nav.Link style={fontStyle} href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={fontStyle}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{
          fontFamily: "CoffeeSigns",
          fontSize: "45px",
          display: "inline-block",
          zIndex: "5",
          transform: `translate(10px, -62px)`,
        }}
      >
        Crystal Villanueva
      </div>
    </div>
  );
};

export default NavBar;
