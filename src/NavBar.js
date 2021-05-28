import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#f8edeb" }}>
        <Nav>
          <div style={{ display: "flex", margin: "-20px" }}>
            <Nav.Link
              href="#home"
              style={{
                fontFamily: "CoffeeSigns",
                fontSize: "35px",
                // margin: "-20px ",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
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
          }}
        >
          Crystal Villanueva
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
