import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
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
          <img alt="pics" src={props.img} className="cardImage card" />
          <div>
            <h4 className="card-h4">{props.title}</h4>
            <h3 className="card-h3">
              ₦{props.price}
              <span className="card-span"> /Pernight</span>
            </h3>
          </div>
          <div className="card-li">
            <p className="card-p">
              size: <span className="card-s">{props.size} ft</span>
            </p>
            <p className="card-p">
              Capacity:{' '}
              <span className="card-s">Max person {props.capacity}</span>
            </p>
            <p className="card-p">
              Bed: <span className="card-s">{props.bed}</span>
            </p>
            <p className="card-p">
              Services: <span className="card-s">{props.services}</span>
            </p>
          </div>
          <Link to={`/RoomDetails?id=${props.id}`}>
            <Button className="card-bt ">More Details</Button>
          </Link>
        </Card>
      </Row>
    </div>
  );
}

export default CardFill;
