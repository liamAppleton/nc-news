import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar
      expand="sm"
      className="bg-body-tertiary position-sticky top-0 mb-4"
      style={{ zIndex: 1020 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          NC News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coding</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Football</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cooking</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
