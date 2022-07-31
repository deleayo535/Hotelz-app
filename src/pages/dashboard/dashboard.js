import Header from '../../component/header/header';
import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiServices';
import CardFill from '../../component/Card/Card';

function Dashboard() {
  const [rooms, setRooms] = useState([]);

  const getrooms = async () => {
    try {
      const rooms = await apiService('/api/v1/rooms', 'GET');
      console.log(rooms);
      setRooms(rooms?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getrooms();
  }, []);
  const Cards = rooms.slice(0, 3).map((item, i) => {
    return (
      <CardFill
        key={i}
        id={item._id}
        img={item.imageCover}
        title={item.title}
        price={item.price}
        bed={item.bed}
        services={item.services}
        size={item.size}
        capacity={item.capacity}
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
      </div>
    </div>
  );
}

export default Dashboard;
