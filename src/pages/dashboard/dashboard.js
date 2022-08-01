import Header from '../../component/header/header';
import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiServices';
import Footer from '../../component/footer/footer';
import CardFill from '../../component/Card/Card';

function Dashboard() {
  const auth = sessionStorage.getItem('user');

  const [bookings, setbooking] = useState([]);

  const getbooking = async (user) => {
    try {
      const booking = await apiService(
        `/api/v1/bookings?user=${user._id}&paid=true`,
        'GET'
      );

      setbooking(booking?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('auth', auth);
    if (auth) {
      console.log('auth-re', auth);
      const user = JSON.parse(auth);
      getbooking(user);
    }
  }, [auth]);

  const Cards = bookings.map((item, i) => {
    return (
      <CardFill
        key={i}
        id={item._id}
        img={item.room.imageCover}
        title={item.room.title}
        price={item.price}
        bed={item.room.bed}
        services={item.room.services}
        size={item.room.size}
        capacity={item.room.capacity}
      />
    );
  });
  return (
    <div>
      <div
        style={{ height: '200px', minHeight: '200px' }}
        className="hero-container"
      >
        <Header />

        <div
          style={{
            color: '#fff',
            fontSize: '28px',
            fontFamily: 'Cabin, sans-serif',
          }}
        >
          Transaction history
        </div>
        <div className="cardcontainer">{Cards}</div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Dashboard;
