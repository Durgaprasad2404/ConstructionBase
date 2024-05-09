import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import URL_FOR_API from '../API/UrlOfApi';
import Cookies from 'js-cookie'

function LoginPage() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    // Clear error message if validation passed
    setErrorMsg('');

    try {
      const res = await fetch(URL_FOR_API + "/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      Cookies.set("jwtoken",data.token)
      // console.log(data)
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      window.alert('Login Success');
      setSuccessMsg('Login successful!');
      history('/user');

      // Clear form fields after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMsg(error.message || 'Login failed');
    }
  };

  return (
    <div className="loginBG">
      <div className="main">
        <h3>Enter your login credentials</h3>
        <form onSubmit={handleSubmit} method="POST">
          {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
          {successMsg && <div style={{ color: 'green' }}>{successMsg}</div>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="login-input"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              autoComplete="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                className="login-input"
                id="password"
                name="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                autoComplete="true"
              />
              <i
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </i>
            </div>
          </div>
          <div className="wrap">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          Not registered?{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
