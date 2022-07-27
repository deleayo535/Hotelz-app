import './header.css';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="header-h1">
          <span style={{ color: '#fff' }}>Hotel</span>
          <span style={{ color: '#fd7792' }}>z</span>
        </h1>
        <ul className="navbar-nav header-ul">
          <li className="header-li">Home</li>
          <li className="header-li">About</li>
          <li className="header-li">Services</li>
          <li className="header-li">Apartment Room</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
