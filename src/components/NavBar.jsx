import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { themeToggle } from '../../utils/utils';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useState } from 'react';

export const NavBar = ({ searchParams, setSearchParams, home }) => {
  const navigate = useNavigate();
  const [ariaTheme, setAriaTheme] = useState(false);

  const handleChange = (sortBy, direction) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.has('order')) newParams.delete('order');

    newParams.set('sort_by', sortBy);
    if (direction) newParams.set('order', direction);
    setSearchParams(newParams);
  };

  return (
    <>
      <Navbar
        expand="sm"
        className="bg-body-tertiary position-sticky top-0 mb-4"
        style={{ zIndex: 1020 }}
      >
        <Container>
          {!home && (
            <IoArrowBackOutline
              aria-label="back"
              role="button"
              aria-pressed={home}
              tabIndex="0"
              className="arrow brand-red"
              size={30}
              onClick={() => navigate(-1)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate(-1);
              }}
            />
          )}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {home && (
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
            <div className="ms-auto">
              <Form.Check
                aria-label="theme toggle"
                role="button"
                aria-pressed={ariaTheme}
                tabIndex="0"
                type="switch"
                id="custom-switch"
                label="Theme"
                onClick={() => {
                  setAriaTheme((bool) => !bool);
                  themeToggle();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setAriaTheme((bool) => !bool);
                    themeToggle();
                  }
                }}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
