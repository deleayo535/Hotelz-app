import { Button } from 'antd';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  const auth = sessionStorage.getItem('user');
  return (
    <div>
      <header className="header">
        <h1 className="header-h1">
          <span style={{ color: '#fff' }}>Hotel</span>
          <span style={{ color: '#00917c' }}>z</span>
        </h1>
        <ul className="navbar-nav header-ul">
          <li className="header-li">
            <Link style={{ color: '#fff' }} to="/home">
              Home
            </Link>
          </li>
          <li className="header-li">About</li>
          <li className="header-li">Services</li>
          <li className="header-li">
            <Link style={{ color: '#fff' }} to="/Room">
              Room
            </Link>
          </li>
          <li className="header-li">
            <Button className="header-bt">
              <Link to={auth ? '/dashboard' : '/SignIn'}>
                {auth ? 'Dashboard' : 'Sign In'}
              </Link>
            </Button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
