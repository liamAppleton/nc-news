import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
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
                <NavDropdown.Item as={Link} to="/?topic=coding">
                  Coding
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/?topic=football">
                  Football
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/?topic=cooking">
                  Cooking
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sort by" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/?sort_by=created_at">
                  {'Date (oldest)'}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/?sort_by=created_at&order=desc"
                >
                  {'Date (most recent)'}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/?sort_by=comment_count">
                  {'Comments (lowest)'}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/?sort_by=comment_count&order=desc"
                >
                  {'Comments (highest)'}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/?sort_by=votes">
                  {'Votes (lowest)'}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/?sort_by=votes&order=desc">
                  {'Votes (highest)'}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="d-flex align-items-center ms-1 fs-6"></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
