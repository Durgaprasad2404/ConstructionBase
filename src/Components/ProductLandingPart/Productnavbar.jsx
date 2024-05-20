import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Productnavbar() {
  return (
    <>
      <nav>
        <ul className="product-ul">
          <li className="dropdown">
            <Link to="/equipment">
              Equipment <FaCaretDown />
            </Link>
            <div className="dropdown-content">
              <a href="#Electrical">Electrical</a>
              <a href="#Handtools">Handtools</a>
              <a href="#Heavy">Heavy Mechinery </a>
              <a href="#Ladders">Ladders</a>
              <a href="#Safety">Safety gears</a>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/electronicsElectrical">
              Electronics & Electrical
              <FaCaretDown />
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
              Building & Construction
              <FaCaretDown />
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
      </nav>
    </>
  );
}

export default Productnavbar;
