import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./productnav.css";
import { pro } from "../../itemsData/productsData";
import Allproducts from "../productsDisplay/Allproducts";

function Productnavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPros, setFilterPros] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const filtered_list = pro.filter((product) =>
        product.ITEMNAME.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterPros(filtered_list);
    } else {
      setFilterPros([]);
    }
  }, [searchTerm]);
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
              className="product-search-input"
            />
          </li>
        </ul>
      </header>

      {filterPros.length > 0 ? (
        <div>
          <p>Search results {filterPros.length} </p>
          <div className="allItems">
            {filterPros.map((i) => {
              return (
                <Allproducts
                  id={i.ID}
                  itemname={i.ITEMNAME}
                  imgUrl={i["IMG URL"]}
                  price={i.PRICE}
                  oldprice={i.OLDPRICE}
                  offer={i.OFFER}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Productnavbar;
