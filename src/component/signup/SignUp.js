import { Button, Input } from 'antd';
import React from 'react';
import './signup.css';

function SignUp() {
  return (
    <div className="sign-container">
      <h2 className="sign-h2">Sign Up</h2>
      <Input
        style={{ width: '50%', marginBottom: '15px' }}
        placeholder="Enter your Fullname"
      />
      <Input
        style={{ width: '50%', marginBottom: '15px' }}
        placeholder="Enter your Email"
      />
      <Input.Password
        style={{ width: '50%', marginBottom: '15px' }}
        placeholder="input password"
      />
      <Input.Password
        style={{ width: '50%', marginBottom: '15px' }}
        placeholder="confirm password"
      />
      <Button
        style={{
          width: '50%',
          color: '#fff',
          backgroundColor: '#00917c',
        }}
        size="medium"
        block
      >
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
