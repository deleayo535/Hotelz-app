import 'antd/dist/antd.css';
import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import './Form.css';

const Forms = () => {
  return (
    <Form>
      <div className="form">
        <div>
          <h1 className="form-h1">Book your Apartment</h1>
        </div>

        <div className="form-wrap">
          <Form.Item name="Full name">
            <Input placeholder="Full Name" />
          </Form.Item>
          <div className="form-flex">
            <Form.Item name="Check-in">
              <Input placeholder="Check-in" />
            </Form.Item>
            <Form.Item name="Check-out">
              <Input placeholder="Check-out" />
            </Form.Item>
          </div>
          <div className="form-flex">
            <Form.Item className="form-size" name="Adult">
              <Select placeholder="Adults">
                <Select.Option value="demo">Adults</Select.Option>
                <Select.Option value="demo">1</Select.Option>
                <Select.Option value="demo">2</Select.Option>
                <Select.Option value="demo">3</Select.Option>
                <Select.Option value="demo">4</Select.Option>
                <Select.Option value="demo">5</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item className="form-size" name="Children">
              <Select placeholder="Children">
                <Select.Option value="demo">Children</Select.Option>
                <Select.Option value="demo">1</Select.Option>
                <Select.Option value="demo">2</Select.Option>
                <Select.Option value="demo">3</Select.Option>
                <Select.Option value="demo">4</Select.Option>
                <Select.Option value="demo">5</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="form-flex">
            <Form.Item name="phone number">
              <Input placeholder="Phone Number" />
            </Form.Item>
          </div>
          <Button className="form-bt" size="large" block>
            Book apartment now
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Forms;
