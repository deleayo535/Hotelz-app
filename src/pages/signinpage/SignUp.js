import { Button, Input } from 'antd';
import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="sign-page">
      <h1 className="header-h1 auth-h1">
        <Link to="/">Hotelz</Link>
      </h1>
      <div className="sign-container">
        <h2 className="sign-h2">Sign Up</h2>
        <Input
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="Enter your Fullname"
        />
        <Input
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="Enter your Email"
        />
        <Input.Password
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="input password"
        />
        <Input.Password
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="confirm password"
        />
        <Button
          style={{
            width: '80%',
            color: '#fff',
            backgroundColor: '#00917c',
          }}
          size="medium"
          block
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
