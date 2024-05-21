import React from "react";
import { Link } from "react-router-dom";
import "./Eepro.css";

function ElectricalElectronic() {
  return (
    <>
      <div className="EE-path-bgcontainer">
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
                  src="./Assets/electrical/e22.png"
                  alt="#"
                  className="building-construction-EE-img"
                />
              </div>
              <div>
                <h4>Cat 6 Ethernet Cable</h4>
                <p className="building-construction-EE-product-para">
                  High-speed Ethernet cable for networking applications
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
                  src="./Assets/electrical/e22.png"
                  alt="#"
                  className="building-construction-EE-img"
                />
              </div>
              <div>
                <h4>Cat 6 Ethernet Cable</h4>
                <p className="building-construction-EE-product-para">
                  High-speed Ethernet cable for networking applications
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
                  src="./Assets/electrical/e22.png"
                  alt="#"
                  className="building-construction-EE-img"
                />
              </div>
              <div>
                <h4>Cat 6 Ethernet Cable</h4>
                <p className="building-construction-EE-product-para">
                  High-speed Ethernet cable for networking applications
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
                  src="./Assets/electrical/e22.png"
                  alt="#"
                  className="building-construction-EE-img"
                />
              </div>
              <div>
                <h4>Cat 6 Ethernet Cable</h4>
                <p className="building-construction-EE-product-para">
                  High-speed Ethernet cable for networking applications
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
                  src="./Assets/electrical/e22.png"
                  alt="#"
                  className="building-construction-EE-img"
                />
              </div>
              <div>
                <h4>Cat 6 Ethernet Cable</h4>
                <p className="building-construction-EE-product-para">
                  High-speed Ethernet cable for networking applications
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
                  src="./Assets/electrical/e22.png"
                  alt="#"
                  className="building-construction-EE-img"
                />
              </div>
              <div>
                <h4>Cat 6 Ethernet Cable</h4>
                <p className="building-construction-EE-product-para">
                  High-speed Ethernet cable for networking applications
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
                  src="./Assets/electrical/e22.png"
                  alt="#"
                  className="building-construction-EE-img"
                />
              </div>
              <div>
                <h4>Cat 6 Ethernet Cable</h4>
                <p className="building-construction-EE-product-para">
                  High-speed Ethernet cable for networking applications
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
      </div>
    </>
  );
}

export default ElectricalElectronic;
