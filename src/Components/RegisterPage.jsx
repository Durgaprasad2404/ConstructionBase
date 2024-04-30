import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
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
        await axios.post('http://localhost:3004/register', {
          email,password
        })
        .then(res=>{
                  if(res.data==="exist"){
                      alert("User already exists")
                  }
                  else if(res.data==="notexist"){
                     history("/home",{state:{id:email}})
                     setSuccessMsg('success')
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
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} action="POST">
        {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
        {successMsg && <div style={{ color: 'green' }}>{successMsg}</div>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            autoComplete="true"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
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
        <button type="submit">Register</button>
        <p>
          If registered?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
