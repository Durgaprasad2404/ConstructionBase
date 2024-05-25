import React, { useState } from "react";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./productnav.css";

function Productnavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="menu-button" onClick={toggleMenu}>
          Category
          <FaBars />
        </div>
        <ul className={`product-ul ${isOpen ? "open" : ""}`}>
          <li className="dropdown">
            <Link to="/equipment">
              <div className="dp">
                <span className="pro-nav-item">Equipment</span>
                <i>
                  <FaCaretDown />
                </i>
              </div>
            </Link>
            <div className="dropdown-content">
              <a href="#Electrical">Electrical</a>
              <a href="#Handtools">Handtools</a>
              <a href="#Heavy">Heavy Machinery</a>
              <a href="#Ladders">Ladders</a>
              <a href="#Safety">Safety gears</a>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/electronicsElectrical">
              <div className="dp">
                <span className="pro-nav-item">Electronics & Electrical</span>
                <i>
                  <FaCaretDown />
                </i>
              </div>
            </Link>
            <div className="dropdown-content">
              <a href="#Cables">Cables & wires</a>
              <a href="#Circuites">Circuites</a>
              <a href="#Pannels">Pannels</a>
              <a href="#Pipes">Pipes</a>
              <a href="#WireCutters">Wire Cutters</a>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/building">
              <div className="dp">
                <span className="pro-nav-item">Building & Construction</span>
                <i>
                  <FaCaretDown />
                </i>
              </div>
            </Link>
            <div className="dropdown-content">
              <a href="#Bricks">Bricks</a>
              <a href="#Cement">Cement</a>
              <a href="#Iron">Iron</a>
              <a href="#Woods">Woods</a>
              <a href="#CrushedStone">Crushed stone</a>
              <a href="#Sand">Sand</a>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Productnavbar;
