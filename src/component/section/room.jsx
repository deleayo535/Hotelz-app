import Cards from '../Card/Card';
import Cart from '../Card/cart';
import { Row } from 'antd';

function Room() {
  const cards = Cart.map((item) => {
    return (
      <Row>
        <Cards
          coverimage={item.coverimage}
          title={item.title}
          text={item.text}
          button={item.button}
        />
      </Row>
    );
  });
  return (
    <div>
      <h2>Our Rooms</h2>
      <div>
        <ul>
          <li>Home</li>
          <li>Romes</li>
        </ul>
      </div>
      {/* <div className="cardCon"> */}
      <div className="card-list">{cards}</div>
      {/* </div> */}
    </div>
  );
}

export default Room;
