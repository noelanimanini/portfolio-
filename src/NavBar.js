import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home" className="nav-name">
          Welcome!
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-style">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            {/* <NavDropdown title="icon?" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;