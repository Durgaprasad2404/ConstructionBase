import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaCartPlus } from 'react-icons/fa';
import { ImMenu3, ImMenu4 } from 'react-icons/im';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-links">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/RentedVehicles'>Rental Vehicles</Link>
          </li>
          <li className="dropdown">
              <Link to="/Equipment">Equipment</Link>
              <div className="dropdown-content">
                <Link to='/Equipment'>Electrical</Link>
                <Link to='/Equipment'>Handtools</Link>
                <Link to='/Equipment'>Heavy Mechinery </Link>
                <Link to='/Equipment'>Ladders</Link>
                <Link to='/Equipment'>Safety gears</Link>
              </div>
            </li>
          <li className="dropdown">
              <Link to="/EEpath">Electronics & Electrical</Link>
              <div className="dropdown-content">
                <Link to='/EEpath'>Cables & wires</Link>
                <Link to='/EEpath'>Circuites</Link>
                <Link to='/EEpath'>Pannels</Link>
                <Link to='/EEpath'>Pipes</Link>
                <Link to='/EEpath'>Wire Cutters</Link>
              </div>
            </li>
          <li className="dropdown">
              <Link to="/Bcpath">Building & Construction </Link>
              <div className="dropdown-content">
                <Link to='/Bcpath'>Bricks</Link>
                <Link to='/Bcpath'>Cement</Link>
                <Link to='/Bcpath'>Iron</Link>
                <Link to='/Bcpath'>Woods</Link>
                <Link to='/Bcpath'>Crushed stone</Link>
                <Link to='/Bcpath'>Sand</Link>
              </div>
            </li>
            <li className='nav-item'>
            <Link to='/findWorkers'>Find Workers Here</Link>
          </li>
        </ul>
        <div style={{display:'flex',gap:'10px',flexDirection:'row-reverse',justifyContent:'center',alignItems:'center'}}>
          <div>
              <Link to='/Cart'>
                <span className='cart'>
                  <FaCartPlus/>
                </span>
              </Link>
          </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <span className='menu'>
            <ImMenu3 />
            </span>
             : 
            <span className='menu'>
              <ImMenu4 />
            </span>}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
