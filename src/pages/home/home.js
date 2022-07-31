import CardFill from '../../component/Card/Card';
import Hero from '../../component/hero/hero';
import Detail from '../../component/section/room';
import Footer from '../../component/footer/footer';
import apiService from '../../utils/apiServices';
import { useEffect, useState } from 'react';

function Home() {
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
      <Hero />
      <Detail />
      <div className="cardcontainer">{Cards}</div>
      <Footer />
    </div>
  );
}

export default Home;
