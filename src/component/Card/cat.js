import React from 'react';
import { Button, Card, Row } from 'antd';

function Cat() {
  return (
    <div>
      <Row>
        <Card bordered={true} hoverable style={{ width: 370 }} className="card">
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
            <Button>more details</Button>
          </div>
        </Card>
      </Row>
    </div>
  );
}
export default Cat;
