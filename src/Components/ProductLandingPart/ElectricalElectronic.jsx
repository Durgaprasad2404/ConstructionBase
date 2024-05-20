import React from "react";
import { Link } from "react-router-dom";
import "./Eepro.css";

function ElectricalElectronic() {
  return (
    <>
      <h2 className="building-construction-EE-heading">
        Building Construction Electrical & Electronic Goods
      </h2>
      <div className="building-construction-EE-materials-bgcontainer">
        <div
          style={{
            backgroundImage:
              "url('./Assets/building-construction-EE-goods.png')",
          }}
          className="building-construction-EE-materials "
        >
          <p className="building-construction-EE-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <Link to="/electronicsElectrical">
            <button className="building-construction-EE-btn">View All</button>
          </Link>
        </div>
        <div className="building-construction-EE-products-container">
          <div className="building-construction-EE-product-container">
            <div>
              <img
                src="./Assets/building/b1.png"
                alt="#"
                className="building-construction-EE-img"
              />
            </div>
            <div>
              <h4>Red Clay Bricks</h4>
              <p className="building-construction-EE-product-para">
                Red clay bricks offer unmatched strength, durability, and
                timeless aesthetic appeal for all your building needs
              </p>
              <span>
                &#8377; 12 <br />
              </span>
              <span className="oldprice"> &#8377; 20</span>
              <span className="offer">10% OFF</span>
            </div>
          </div>
          <div className="building-construction-EE-product-container">
            <div>
              <img
                src="./Assets/building/b1.png"
                alt="#"
                className="building-construction-EE-img"
              />
            </div>
            <div>
              <h4>Red Clay Bricks</h4>
              <p className="building-construction-EE-product-para">
                Red clay bricks offer unmatched strength, durability, and
                timeless aesthetic appeal for all your building needs
              </p>
              <span>
                &#8377; 12 <br />
              </span>
              <span className="oldprice"> &#8377; 20</span>
              <span className="offer">10% OFF</span>
            </div>
          </div>
          <div className="building-construction-EE-product-container">
            <div>
              <img
                src="./Assets/building/b1.png"
                alt="#"
                className="building-construction-EE-img"
              />
            </div>
            <div>
              <h4>Red Clay Bricks</h4>
              <p className="building-construction-EE-product-para">
                Red clay bricks offer unmatched strength, durability, and
                timeless aesthetic appeal for all your building needs
              </p>
              <span>
                &#8377; 12 <br />
              </span>
              <span className="oldprice"> &#8377; 20</span>
              <span className="offer">10% OFF</span>
            </div>
          </div>
          <div className="building-construction-EE-product-container">
            <div>
              <img
                src="./Assets/building/b1.png"
                alt="#"
                className="building-construction-EE-img"
              />
            </div>
            <div>
              <h4>Red Clay Bricks</h4>
              <p className="building-construction-EE-product-para">
                Red clay bricks offer unmatched strength, durability, and
                timeless aesthetic appeal for all your building needs
              </p>
              <span>
                &#8377; 12 <br />
              </span>
              <span className="oldprice"> &#8377; 20</span>
              <span className="offer">10% OFF</span>
            </div>
          </div>
          <div className="building-construction-EE-product-container">
            <div>
              <img
                src="./Assets/building/b1.png"
                alt="#"
                className="building-construction-EE-img"
              />
            </div>
            <div>
              <h4>Red Clay Bricks</h4>
              <p className="building-construction-EE-product-para">
                Red clay bricks offer unmatched strength, durability, and
                timeless aesthetic appeal for all your building needs
              </p>
              <span>
                &#8377; 12 <br />
              </span>
              <span className="oldprice"> &#8377; 20</span>
              <span className="offer">10% OFF</span>
            </div>
          </div>
          <div className="building-construction-EE-product-container">
            <div>
              <img
                src="./Assets/building/b1.png"
                alt="#"
                className="building-construction-EE-img"
              />
            </div>
            <div>
              <h4>Red Clay Bricks</h4>
              <p className="building-construction-EE-product-para">
                Red clay bricks offer unmatched strength, durability, and
                timeless aesthetic appeal for all your building needs
              </p>
              <span>
                &#8377; 12 <br />
              </span>
              <span className="oldprice"> &#8377; 20</span>
              <span className="offer">10% OFF</span>
            </div>
          </div>
          <div className="building-construction-EE-product-container">
            <div>
              <img
                src="./Assets/building/b1.png"
                alt="#"
                className="building-construction-EE-img"
              />
            </div>
            <div>
              <h4>Red Clay Bricks</h4>
              <p className="building-construction-EE-product-para">
                Red clay bricks offer unmatched strength, durability, and
                timeless aesthetic appeal for all your building needs
              </p>
              <span>
                &#8377; 12 <br />
              </span>
              <span className="oldprice"> &#8377; 20</span>
              <span className="offer">10% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ElectricalElectronic;
