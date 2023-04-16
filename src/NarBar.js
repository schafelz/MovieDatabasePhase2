import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MovieDatabase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link href="">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MovieDatabase">
              <Nav.Link href="">Movie-Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/RandomMovie">
              <Nav.Link href="">Random-Movie</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MoviePlot">
              <Nav.Link href="">Movie-Quiz</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AboutUs">
              <Nav.Link href="">About us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link href="">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
