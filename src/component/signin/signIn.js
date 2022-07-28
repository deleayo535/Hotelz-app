import { Button, Input } from 'antd';
import React from 'react';
import './signin.css';

function SignIn() {
  return (
    <div className="sign-container">
      <h2 className="sign-h2">Log In</h2>
      <Input
        style={{ width: '50%', marginBottom: '15px' }}
        placeholder="Enter your username/email"
      />
      <Input.Password
        style={{ width: '50%', marginBottom: '15px' }}
        placeholder="input password"
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
        Sign In
      </Button>
      <p className="sign-p">If you don't have an Account. SignUp</p>
    </div>
  );
}

export default SignIn;
