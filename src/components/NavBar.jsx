import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { HomeContext } from '../contexts/Home';
import { useContext } from 'react';

export const NavBar = ({ searchParams, setSearchParams }) => {
  const { home } = useContext(HomeContext);

  const handleChange = (sortBy, direction) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.has('order')) newParams.delete('order');

    newParams.set('sort_by', sortBy);
    if (direction) newParams.set('order', direction);
    setSearchParams(newParams);
  };

  return (
    <div className="position-sticky top-0 mb-4" style={{ zIndex: 1020 }}>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {home && (
              <Nav className="me-auto">
                <NavDropdown title="Topics" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/topics/coding">
                    Coding
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/topics/football">
                    Football
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/topics/cooking">
                    Cooking
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sort by" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => handleChange('created_at')}>
                    {'Date (oldest)'}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleChange('created_at', 'desc')}
                  >
                    {'Date (most recent)'}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleChange('comment_count')}
                  >
                    {'Comments (lowest)'}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleChange('comment_count', 'desc')}
                  >
                    {'Comments (highest)'}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleChange('votes')}>
                    {'Votes (lowest)'}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleChange('votes', 'desc')}
                  >
                    {'Votes (highest)'}
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className="d-flex align-items-center ms-1 fs-6"></Nav.Item>
              </Nav>
            )}
            <ThemeToggle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
