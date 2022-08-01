import { Button, Input } from 'antd';
import React, { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../../utils/apiServices';

function SignIn() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const logInHandler = async () => {
    setloading(true);

    const { email, password } = form;
    try {
      const auth = await apiService('/api/v1/auth/login', 'POST', {
        email,
        password,
      });

      sessionStorage.setItem('user', JSON.stringify(auth?.data?.data?.user));
      navigate('/');
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <div className="sign-page">
      <h1 className="header-h1 auth-h1">
        <Link to="/">Hotelz</Link>
      </h1>

      <div className="sign-container">
        <h2 className="sign-h2">Log In</h2>
        <Input
          style={{ width: '80%', marginBottom: '15px' }}
          placeholder="Enter your email"
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
        <Button
          style={{
            width: '80%',
            color: '#fff',
            backgroundColor: '#00917c',
          }}
          size="medium"
          block
          onClick={logInHandler}
          disabled={loading}
        >
          {loading ? 'LOADING...' : form.password ? `Sign In` : 'Sign In'}
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
