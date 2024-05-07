import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { Link, useNavigate } from 'react-router-dom';
import URL_FOR_API from '../API/UrlOfApi';

function RegisterPage() {
    const history = useNavigate();
  const [formData, setFormData] = useState({
    Username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle password visibility toggling
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { Username, email, password } = formData;

    const res = await fetch(URL_FOR_API+"/api/register",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({Username, email, password})
    })

    const data=await res.json()
    if(data.status===422 || !data){
      window.alert('Invalid Registration')
    }else{
      window.alert('Registration successed')
      history('/login')
    }
    // Basic validation
    if (!Username || !email || !password) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    // Clear error message if validation passed
    setErrorMsg('');

    // Process registration...
    // console.log('Form submitted with data:', formData);
console.log(formData)
    // Display success message
    setSuccessMsg('Registration successful!'); // Set your desired success message

    // Hide success message after 2 seconds
    setTimeout(() => {
      setSuccessMsg('');
    }, 2000);
  };
  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} method='POST'>
        {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
        {successMsg && <div style={{ color: 'green' }}>{successMsg}</div>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="Username"
            value={formData.Username}
            onChange={handleInputChange}
            autoComplete="true"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="true"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="true"
              required
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
              {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Toggle eye icon based on password visibility */}
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
