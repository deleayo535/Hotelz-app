import { Card, Row, Button } from 'antd';
import React from 'react';
import './Card.css';

function Cards(props) {
  <Row>
    <Card bordered={true} hoverable style={{ width: 370 }} className="card">
      <img alt="pics" src={props.coverimage} className="cardImage" />
      <div>
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardText">{props.text}</p>
        <Button size="large" className="cardButton">
          {props.button}
        </Button>
      </div>
    </Card>
  </Row>;
}

export default Cards;
