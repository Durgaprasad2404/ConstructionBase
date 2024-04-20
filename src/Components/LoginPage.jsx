import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation and submission logic here
    console.log('Form submitted with data:', formData);
  };
  return (
    <div className='loginBG'>
      <div class="main">
        <h3>Enter your login credentials</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="first">
                  Username:
              </label>
            <input type="text"
            className='login-input'
                   id="first"
                   name="first"
                   placeholder="Enter your Username" required
                   value={formData.email}
            onChange={handleInputChange}/>
 
            <label htmlFor="password">
                  Password:
              </label>
            <input type="password"
            className='login-input'
                   id="password"
                   name="password"
                   placeholder="Enter your Password" required
                   value={formData.email}
            onChange={handleInputChange}/>
 
            <div className="wrap">
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
        <p>Not registered?
            {/*  eslint-disable-next-line  */}
              <Link to='/register'
               style={{textDecoration: "none"}}>
                Create an account
            </Link>
        </p>
    </div>
    </div>
  )
}

export default LoginPage
