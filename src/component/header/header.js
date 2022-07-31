import { Button } from 'antd';
import './header.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('user');
    setAuth(!!auth);
  }, []);

  const logOut = () => {
    sessionStorage.clear();
    setAuth(false);
    navigate('/');
  };
  return (
    <div>
      <header className="header">
        <h1 className="header-h1">
          <Link to="/">
            <span style={{ color: '#fff' }}>Hotel</span>
            <span style={{ color: '#00917c' }}>z</span>
          </Link>
        </h1>
        <ul className="navbar-nav header-ul">
          <li className="header-li">
            <Link style={{ color: '#fff' }} to="/">
              Home
            </Link>
          </li>
          <li className="header-li">About</li>
          <li className="header-li">Services</li>
          <li className="header-li">
            <Link style={{ color: '#fff' }} to="/ViewRooms">
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
          {auth && (
            <li className="header-li">
              <Button className="header-bt" onClick={logOut}>
                Logout
              </Button>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Header;
