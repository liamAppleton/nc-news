import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className="d-flex align-items-center gap-2 fs-2">
            <img
              alt="NC News logo"
              src="src/assets/news-favicon.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            NC News
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};
