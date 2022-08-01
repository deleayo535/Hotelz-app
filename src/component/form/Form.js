import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

import apiService from '../../utils/apiServices';
import { useEffect, useState } from 'react';

const Forms = () => {
  const auth = sessionStorage.getItem('user');

  const [options, setoptions] = useState([]);
  const [loading, setloading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    room: '',
    guest: 1,
    user: '',
    email: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onSelectChange = (value) => {
    setForm({ ...form, room: value });
  };

  const onGuestChange = (value) => {
    setForm({ ...form, guest: value });
  };
  const getrooms = async () => {
    try {
      const room = await apiService(`/api/v1/rooms`, 'GET');

      setoptions(room?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getrooms();
  }, []);

  useEffect(() => {
    if (auth) {
      const user = JSON.parse(auth);

      setForm({ ...form, user: user._id, email: user.email });
    }
    // eslint-disable-next-line
  }, [auth]);

  const amountToPay = () => {
    const room = options.filter((item) => item._id === form.room);
    if (room[0]) {
      return form.guest * room[0].price;
    } else {
      return 0;
    }
  };

  const handlePayment = async () => {
    try {
      setloading(true);
      const { data } = await apiService(
        `/api/v1/transaction/initialize`,
        'POST',
        {
          email: form.email,
          amount: amountToPay(),
          callback_url: window.location.origin,
          room: form.room,
          price: form.price,
          user: form.user,
        }
      );
      // setloading(false);s

      //redirect to paystack
      window.location.href = data?.data?.data?.data?.authorization_url;
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  return (
    <Form>
      <div className="form">
        <div>
          <h1 className="form-h1">Book Your Hotel</h1>
        </div>

        <div className="form-wrap">
          <Form.Item name="Full name">
            <Input
              placeholder="Full Name"
              onChange={handleInputs}
              value={form.name}
              name="name"
            />
          </Form.Item>
          <Form.Item className="form-size" name="Adult">
            <Select placeholder="1 Guests" onChange={onGuestChange}>
              <Select.Option value="1">1 Guests</Select.Option>
              <Select.Option value="2">2 Guests</Select.Option>
              <Select.Option value="3">3 Guests</Select.Option>
              <Select.Option value="4">4 Guests</Select.Option>
              <Select.Option value="5">5 Guests</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="form-size" name="Room">
            <Select placeholder="Room" onChange={onSelectChange}>
              {options.map(({ _id, title }) => (
                <Select.Option value={_id} key={_id}>
                  {title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div>
            <Form.Item name="phone number">
              <Input placeholder="Phone Number" />
            </Form.Item>
          </div>
          {auth ? (
            <Button
              className="form-bt"
              size="large"
              block
              onClick={handlePayment}
              disabled={loading}
            >
              {loading
                ? 'LOADING...'
                : form.room
                ? `BOOK NOW FOR ${amountToPay()} naria`
                : 'BOOK NOW'}
            </Button>
          ) : (
            <Button className="form-bt" size="large" block>
              <Link to={'/SignIn'}>LOGIN TO BOOK A ROOM</Link>
            </Button>
          )}
        </div>
      </div>
    </Form>
  );
};

export default Forms;
