import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="custom-navbar" 
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-text">A1</span>
          <span className="brand-accent">CRM</span>
          <span className="brand-text">Catalyst</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/industries" onClick={() => setExpanded(false)}>
              Industries
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light" className="contact-btn">
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
