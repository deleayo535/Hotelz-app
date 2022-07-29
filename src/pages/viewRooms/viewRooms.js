import Header from '../../component/header/header';
import CardFill from '../../component/Card/Card';
import datas from './datas';

function ViewRooms() {
  const Cards = datas.map((item) => {
    return (
      <CardFill
        img={item.coverImg}
        title={item.title}
        price={item.price}
        span={item.span}
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
        <div>
          <h1>Our Rooms</h1>
          <div>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
          </div>
        </div>
      </div>
      <div className="cardcontainer">{Cards}</div>
    </div>
  );
}

export default ViewRooms;
