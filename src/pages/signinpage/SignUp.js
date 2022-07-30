import { Button, Input } from 'antd';
import React, { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../../utils/apiServices';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const signUpHandler = async () => {
    const { email, password, confirmPassword, fullName } = form;
    try {
      if (password !== confirmPassword) return;

      const auth = await apiService('/api/v1/auth/signup', 'POST', {
        name: fullName,
        email,
        password,
        passwordConfirm: confirmPassword,
      });

      sessionStorage.setItem('user', JSON.stringify(auth));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
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
          name="fullName"
          onChange={handleInputs}
          value={form.fullName}
        />
        <Input
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="Enter your Email"
          name="email"
          onChange={handleInputs}
          value={form.email}
        />
        <Input.Password
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="input password"
          name="password"
          onChange={handleInputs}
          value={form.password}
        />
        <Input.Password
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="confirm password"
          name="confirmPassword"
          onChange={handleInputs}
          value={form.confirmPassword}
        />
        <Button
          style={{
            width: '80%',
            color: '#fff',
            backgroundColor: '#00917c',
          }}
          size="medium"
          block
          onClick={signUpHandler}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
