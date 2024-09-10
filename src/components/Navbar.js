import{useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";



// Ensure the component name is different from the import
export const MainNavbar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">  {/* Use 'dark' and specify 'variant' */}
        <Container>
          <Navbar.Brand href="#home">My Nav</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };