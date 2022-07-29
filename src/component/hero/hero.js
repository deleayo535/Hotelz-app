import { Button } from 'antd';
import Header from '../header/header';
import './hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <Header />
        <h1 className="hero-text">
          Once a year go someplace you've never been before.
        </h1>
        <Link to="/ViewRooms">
          <Button className="hero-bt">View our rooms</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
