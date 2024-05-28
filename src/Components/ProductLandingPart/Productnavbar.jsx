import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
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
          <li className="dp">
            <Link to="/equipment" style={{ textDecoration: "none" }}>
              <span className="pro-nav-item">Equipment</span>
            </Link>
          </li>
          <li className="dp">
            <Link
              to="/electronicsElectrical"
              style={{ textDecoration: "none" }}
            >
              <span className="pro-nav-item">Electronics & Electrical</span>
            </Link>
          </li>
          <li className="dp">
            <Link to="/building" style={{ textDecoration: "none" }}>
              <span className="pro-nav-item">Building & Construction</span>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Productnavbar;
