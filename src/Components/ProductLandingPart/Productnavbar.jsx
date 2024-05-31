import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./productnav.css";
import { pro } from "../../itemsData/productsData";

function Productnavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = pro.filter((product) =>
    product.ITEMNAME.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredProducts);

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
          <li>
            <input
              type="text"
              placeholder="Search for a product"
              value={searchTerm}
              onChange={handleChange}
            />
          </li>
        </ul>
      </header>
    </>
  );
}

export default Productnavbar;
