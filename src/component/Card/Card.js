import React from 'react';
import './Card.css';
import { Button, Row, Card } from 'antd';

function CardFill(props) {
  return (
    <div className="cardfill">
      <Row>
        <Card
          bordered={true}
          hoverable={true}
          style={{
            width: 370,
            height: 560,
            margin: '1rem',
            border: '1px solid #ebebeb',
          }}
          className="card"
        >
          <div className="img-wrap">
            <img alt="pics" src={props.img} className="cardImage card" />
          </div>
          <div>
            <h4 className="card-h4">{props.title}</h4>
            <h3 className="card-h3">
              {props.price}
              <span className="card-span">{props.span}</span>
            </h3>
          </div>
          <div className="card-li">
            <p className="card-p">
              size: <span className="card-s">30 ft</span>
            </p>
            <p className="card-p">
              Capacity: <span className="card-s">Max persion 3</span>
            </p>
            <p className="card-p">
              Bed: <span className="card-s">King Beds</span>
            </p>
            <p className="card-p">
              Services:{' '}
              <span className="card-s">Wifi, Television, Bathroom,..</span>
            </p>
          </div>
          <Button className="card-bt ">More Details</Button>
        </Card>
      </Row>
    </div>
  );
}

export default CardFill;
