import { Button, Input } from 'antd';
import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="sign-page">
      <h1 className="header-h1 auth-h1">
        <Link to="/">Hotelz</Link>
      </h1>

      <div className="sign-container">
        <h2 className="sign-h2">Log In</h2>
        <Input
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="Enter your username/email"
        />
        <Input.Password
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="input password"
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
          Sign In
        </Button>
        <p className="sign-p">
          If you don't have an Account.
          <Link to="/SignUp">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
