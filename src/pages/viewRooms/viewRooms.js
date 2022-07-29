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
      <div className="hero-container">
        <Header />
        <div></div>
      </div>
      <div className="cardcontainer">{Cards}</div>
    </div>
  );
}

export default ViewRooms;
