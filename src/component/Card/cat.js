import React from 'react';
import { Button, Card, Row } from 'antd';
import './Card.css';

function Cat() {
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
          <img
            alt="pics"
            src="https://preview.colorlib.com/theme/sona/img/room/xroom-1.jpg.pagespeed.ic.MJNN_IA10s.webp"
            className="cardImage card"
          />
          <div>
            <h4 className="card-h4">Premium King Room</h4>
            <h3 className="card-h3">
              "153$"
              <span className="card-span">/Pernight</span>
            </h3>
          </div>
          <div className="card-li">
            <p className="card-p">
              Size: <span className="card-s">30 ft</span>
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
          <Button className="card-bt ">more details</Button>
        </Card>
      </Row>
    </div>
  );
}
export default Cat;
