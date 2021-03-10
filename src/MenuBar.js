import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

const MenuBar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href={"/"}>insKillz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <input className="ml-5" type="search" placeholder="search" />
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href={"/course"}>Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={"/inskills"}>Tech On Inskills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={"/contact"}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
