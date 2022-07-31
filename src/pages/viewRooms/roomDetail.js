import Forms from '../../component/form/Form';
import Header from '../../component/header/header';
import { useLocation } from 'react-router-dom';

import apiService from '../../utils/apiServices';
import { useEffect, useState } from 'react';
import './room.css';

function RoomDetails() {
  const { search } = useLocation();
  const [room, setRoom] = useState(null);
  const query = new URLSearchParams(search);
  const id = query.get('id');

  const getrooms = async () => {
    try {
      const room = await apiService(`/api/v1/rooms/${id}`, 'GET');

      setRoom(room?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getrooms();
  }, []);
  return (
    <div>
      <div className="hero-container">
        <Header />
        <div className="room2-container">
          <div className="room-details">
            <div className="room-img">
              <div>
                <img
                  src={room?.imageCover}
                  alt="rooms"
                  style={{
                    borderRadius: '15px',
                  }}
                ></img>
              </div>
              <div className="room-title">
                <div className="room-p">
                  <p>title: {room?.title}</p>
                  <p>bed: {room?.bed}</p>
                  <p> size: {room?.size} ft</p>
                  <p> price: {room?.price}</p>
                  <p>capacity: Max persion {room?.capacity}</p>
                  <p> services: {room?.services}</p>
                </div>
              </div>
            </div>
            <div className="room-des">
              <h2 className="room-h2">description</h2>
              <p className="room-p">
                View extends along a private, quiet and beautiful tropical
                beach. Stay away from the crowd and enjoy the beauty and lust.
                beach. Stay away from the crowd and enjoy the beauty and lust.
              </p>
            </div>
          </div>
          <div className="room-Form">
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
