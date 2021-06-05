import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#f8edeb" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <div style={{ display: "flex", margin: "-20px" }}>
              <Nav.Link
                href="/"
                style={{
                  fontFamily: "CoffeeSigns",
                  fontSize: "35px",
                  // margin: "-20px ",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                style={{
                  fontFamily: "CoffeeSigns",
                  fontSize: "35px",
                  // margin: "-20px",
                }}
              >
                About
              </Nav.Link>
            </div>
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
