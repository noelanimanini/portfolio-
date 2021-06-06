import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavBar() {
  const fontStyle = {
    fontFamily: "CoffeeSigns",
    fontSize: "35px",
  };

  return (
    <div>
      <Navbar expand="lg" className="parent">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navCollapse">
          <Nav className="navDiv">
            <Nav.Link style={fontStyle} href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={fontStyle}>
              About
            </Nav.Link>
          </Nav>
          <div
            style={{
              fontFamily: "CoffeeSigns",
              fontSize: "45px",
              margin: "-4px 285px -33px",
              zIndex: "5",
            }}
          >
            Crystal Villanueva
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
