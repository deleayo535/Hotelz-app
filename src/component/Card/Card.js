import React from 'react';
import './Card.css';
import { Button, Card } from 'antd';

function CardFill() {
  return (
    <Card
      hoverable
      bordered
      style={{
        width: 370,
        // backgroundColor: 'red',
      }}
      cover={
        <div>
          <img
            alt=""
            src="https://preview.colorlib.com/theme/sona/img/room/xroom-1.jpg.pagespeed.ic.MJNN_IA10s.webp"
          />
          <div>
            <h4 className="card-h4">Premium King Room</h4>
            <h3 className="card-h3">
              "153$"
              <span className="card-span">/Pernight</span>
            </h3>
            <table>
              <tbody>
                <tr>
                  <td class="r-o">Size:</td>
                  <td>30 ft</td>
                </tr>
                <tr>
                  <td class="r-o">Capacity:</td>
                  <td>Max persion 3</td>
                </tr>
                <tr>
                  <td class="r-o">Bed:</td>
                  <td>King Beds</td>
                </tr>
                <tr>
                  <td class="r-o">Services:</td>
                  <td>Wifi, Television, Bathroom,...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button>more details</Button>
        </div>
      }
    ></Card>
  );
}

export default CardFill;
