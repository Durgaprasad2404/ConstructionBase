import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaCartPlus } from 'react-icons/fa';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import User from '../LoginUser/User';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
    setIsOpen(!isOpen);
  };
  const toggleUser = () => {
    const sidebar = document.querySelector('.userSidebar');
    sidebar.classList.toggle('show');
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="../Assets/E-logo.png" alt="#" className='logo' />
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
                <a href='#Electrical'>Electrical</a>
                <a href='#Handtools'>Handtools</a>
                <a href='#Heavy'>Heavy Mechinery </a>
                <a href='#Ladders'>Ladders</a>
                <a href='#Safety'>Safety gears</a>
              </div>
            </li>
          <li className="dropdown">
              <Link to="/EEpath">Electronics & Electrical</Link>
              <div className="dropdown-content">
                <a href='#Cables'>Cables & wires</a>
                <a href='#Circuites'>Circuites</a>
                <a href='#Pannels'>Pannels</a>
                <a href='#Pipes'>Pipes</a>
                <a href='#WireCutters'>Wire Cutters</a>
              </div>
            </li>
          <li className="dropdown">
              <Link to="/Bcpath">Building & Construction </Link>
              <div className="dropdown-content">
                <a href='#Bricks'>Bricks</a>
                <a href='#Cement'>Cement</a>
                <a href='#Iron'>Iron</a>
                <a href='#Woods'>Woods</a>
                <a href='#CrushedStone'>Crushed stone</a>
                <a href='#Sand'>Sand</a>
              </div>
            </li>
            <li className='nav-item'>
            <Link to='/workers'>Find Workers Here</Link>
          </li>

        </ul>
        <div style={{display:'flex',gap:'10px',flexDirection:'row-reverse',justifyContent:'center',alignItems:'center'}}>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <span className='menu'>
            <ImMenu3 />
            </span>
             : 
            <span className='menu'>
              <ImMenu4 />
            </span>}
        </div>
        <div className='cart-container'>
              <Link to='/cart' style={{textDecoration:'none'}}>
                <div className='cart'>
                  <span >
                  <FaCartPlus/> 
                </span>
                <span>{props.size}</span>
                </div>
              </Link>
              <div className="settings" onClick={toggleUser}>
                  <span style={{textDecoration:'none',color:'#fff'}}>
                    <MdAdminPanelSettings />
                  </span>
              </div>
          </div>
        </div>
      </div>
          <div className='userSidebar'>
            <div className='userDetails'>
                <User/>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
