import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; 

export default function NavbarComponent({ onScrollToSection }) {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand to="/home" className='logo'>FUTURE AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link 
              onClick={onScrollToSection.services} 
              className="active nav_link text-white mx-2">
              _Services
            </Nav.Link>
            <Nav.Link 
              onClick={onScrollToSection.about} 
              className="nav_link text-white mx-2">
              _About US
            </Nav.Link>
            <Nav.Link 
              onClick={onScrollToSection.career} 
              className="nav_link text-white mx-2">
              _Careers
            </Nav.Link>
            <Nav.Link 
              onClick={onScrollToSection.contact} 
              className="nav_link text-white mx-2">
              _Contact US
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contact" className="p-0 text-center">
              <button className="button w-100">Get Started</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
