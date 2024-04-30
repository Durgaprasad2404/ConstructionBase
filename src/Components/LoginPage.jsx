import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const history = useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await axios.post('http://localhost:3004/login', {
        email,password
      })
       .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                    setSuccessMsg('success')
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

    } catch (error) {
      console.log('Error during login:', error);
      setErrorMsg('An unexpected error occurred: ' + error.message);
    }
  };

  return (
    <div className="loginBG">
      <div className="main">
        <h3>Enter your login credentials</h3>
        <form onSubmit={handleSubmit} action='POST'>
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              className="login-input"
              id="email"
              name="email"
              placeholder="Enter your Username"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
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
                onChange={(e)=>{setPassword(e.target.value)}}
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
          {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
          {successMsg && <div style={{ color: 'green' }}>{successMsg}</div>}
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
