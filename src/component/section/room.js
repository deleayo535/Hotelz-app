import React from 'react';
import './room.css';
// import Forms from './component/form/Form';

function Detail() {
  return (
    <div className="section-room">
      <div className="room-container">
        <span className="room-span">About Us</span>
        <h2 className="room-h2">Continental Beachside Hotel</h2>
        <p className="para">
          Hotelz is a leading online accommodation site. We’re passionate about
          travel. Every day, we inspire and reach millions of travelers across
          90 local websites in 41 languages.
        </p>
        <p className="para">
          So when it comes to booking the perfect hotel, vacation rental,
          resort, apartment, guest house, or tree house, we’ve got you covered.
        </p>
      </div>
      <div className="img">
        <img
          src="	https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp"
          alt=""
          // className="class-img'
          style={{ width: '15rem', margin: '1rem' }}
        />
        <img
          src=" https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp"
          alt=""
          style={{ width: '15rem' }}
        />
      </div>
      <div>{/* <Forms /> */}</div>
    </div>
  );
}

export default Detail;

/* <div className="section-title">
        <span>About Us</span>
        <h2>
          Intercontinental LA Westlake Hotel</br>
        </h2>
        <p className="para">
          Sona.com is a leading online accommodation site. We’re passionate
          about travel. Every day, we inspire and reach millions of travelers
          across 90 local websites in 41 languages.
        </p>
        <p className="para">
          So when it comes to booking the perfect hotel, vacation rental,
          resort, apartment, guest house, or tree house, we’ve got you covered.
        </p>
      </div> */
