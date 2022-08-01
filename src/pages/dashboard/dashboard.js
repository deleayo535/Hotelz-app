import Header from '../../component/header/header';
import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiServices';
import Footer from '../../component/footer/footer';
import CardFill from '../../component/Card/Card';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const { search } = useLocation();
  const auth = sessionStorage.getItem('user');

  const query = new URLSearchParams(search);
  const reference = query.get('reference');

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
  const handleVerify = async (e) => {
    try {
      await apiService(`/api/v1/transaction/verify`, 'POST', {
        reference: reference,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (reference) {
      handleVerify();
      // const user = JSON.parse(auth);
      // getbooking(user);
    }
    // eslint-disable-next-line
  }, [reference]);

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
        <div className="cardcontainer">{Cards}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
