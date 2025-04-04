import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import newsFavicon from '../assets/newsFavicon.png';

export const Logo = () => {
  return (
    <Link to="/" className="text-decoration-none">
      <Navbar.Brand className="d-flex align-items-center gap-2 fs-2 brand-red">
        <img
          alt="NC News logo"
          src={newsFavicon}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        NC News
      </Navbar.Brand>
    </Link>
  );
};
