import React from 'react';
import './Card.css';
import { Button, Row, Card } from 'antd';

function CardFill(props) {
  return (
    <div>
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
          <img alt="pics" src={props.coverImg} className="cardImage card" />
          <div>
            <h4 className="card-h4">{props.title}</h4>
            <h3 className="card-h3">
              {props.price}
              <span className="card-span">{props.span}</span>
            </h3>
          </div>
          <div className="card-li">
            <p className="card-p">
              {props.review}:{' '}
              <span className="card-s">{props.reviewDetail}</span>
            </p>
            <p className="card-p">
              {props.review1}:{' '}
              <span className="card-s">{props.reviewDetail1}</span>
            </p>
            <p className="card-p">
              {props.review2}:{' '}
              <span className="card-s">{props.reviewDetail2}</span>
            </p>
            <p className="card-p">
              {props.review3}:{' '}
              <span className="card-s">{props.reviewDetail3}</span>
            </p>
          </div>
          <Button className="card-bt ">More Details</Button>
        </Card>
      </Row>
    </div>
  );
}

export default CardFill;
