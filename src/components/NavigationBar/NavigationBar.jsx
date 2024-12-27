import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavigationBar = ({ user, onLoggedOut }) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        BenFlix Movies
      </Navbar.Brand>

      <Nav className="me-auto">
        {!user && (
          <>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          </>
        )}
        {user && (
          <>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
          </>
        )}
      </Nav>
    </Container>
  </Navbar>
);
