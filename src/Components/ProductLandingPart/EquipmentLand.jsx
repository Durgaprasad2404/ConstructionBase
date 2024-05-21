import React from "react";
import { Link } from "react-router-dom";
import "./equipmentLand.css";
function EquipmentLand() {
  return (
    <>
      <div className="EquipmentLand-bgcontainer">
        <h2 className="EquipmentLand-heading">
          Building Construction Equipment Materials
        </h2>
        <div className="EquipmentLand-container">
          <div
            style={{
              backgroundImage: "url('./Assets/EquipmentLand.png')",
            }}
            className="EquipmentLand"
          >
            <p className="EquipmentLand-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Link to="/building">
              <button className="EquipmentLand-btn">View All</button>
            </Link>
          </div>
          <div className="EquipmentLand-products">
            <div className="EquipmentLand-product">
              <div>
                <img
                  src="./Assets/EquipmentImages/7.png"
                  alt="#"
                  className="EquipmentLand-img"
                />
              </div>
              <div>
                <h4>Drill</h4>
                <p className="EquipmentLand-product-para">
                  Drill offer unmatched strength, durability, and timeless
                  aesthetic appeal for all your building needs
                </p>
                <span>
                  &#8377; 12 <br />
                </span>
                <span className="oldprice"> &#8377; 20</span>
                <span className="offer">10% OFF</span>
              </div>
            </div>
            <div className="EquipmentLand-product">
              <div>
                <img
                  src="./Assets/EquipmentImages/7.png"
                  alt="#"
                  className="EquipmentLand-img"
                />
              </div>
              <div>
                <h4>Drill</h4>
                <p className="EquipmentLand-product-para">
                  Drill offer unmatched strength, durability, and timeless
                  aesthetic appeal for all your building needs
                </p>
                <span>
                  &#8377; 12 <br />
                </span>
                <span className="oldprice"> &#8377; 20</span>
                <span className="offer">10% OFF</span>
              </div>
            </div>
            <div className="EquipmentLand-product">
              <div>
                <img
                  src="./Assets/EquipmentImages/7.png"
                  alt="#"
                  className="EquipmentLand-img"
                />
              </div>
              <div>
                <h4>Drill</h4>
                <p className="EquipmentLand-product-para">
                  Drill offer unmatched strength, durability, and timeless
                  aesthetic appeal for all your building needs
                </p>
                <span>
                  &#8377; 12 <br />
                </span>
                <span className="oldprice"> &#8377; 20</span>
                <span className="offer">10% OFF</span>
              </div>
            </div>
            <div className="EquipmentLand-product">
              <div>
                <img
                  src="./Assets/EquipmentImages/7.png"
                  alt="#"
                  className="EquipmentLand-img"
                />
              </div>
              <div>
                <h4>Drill</h4>
                <p className="EquipmentLand-product-para">
                  Drill offer unmatched strength, durability, and timeless
                  aesthetic appeal for all your building needs
                </p>
                <span>
                  &#8377; 12 <br />
                </span>
                <span className="oldprice"> &#8377; 20</span>
                <span className="offer">10% OFF</span>
              </div>
            </div>
            <div className="EquipmentLand-product">
              <div>
                <img
                  src="./Assets/EquipmentImages/7.png"
                  alt="#"
                  className="EquipmentLand-img"
                />
              </div>
              <div>
                <h4>Drill</h4>
                <p className="EquipmentLand-product-para">
                  Drill offer unmatched strength, durability, and timeless
                  aesthetic appeal for all your building needs
                </p>
                <span>
                  &#8377; 12 <br />
                </span>
                <span className="oldprice"> &#8377; 20</span>
                <span className="offer">10% OFF</span>
              </div>
            </div>
            <div className="EquipmentLand-product">
              <div>
                <img
                  src="./Assets/EquipmentImages/7.png"
                  alt="#"
                  className="EquipmentLand-img"
                />
              </div>
              <div>
                <h4>Drill</h4>
                <p className="EquipmentLand-product-para">
                  Drill offer unmatched strength, durability, and timeless
                  aesthetic appeal for all your building needs
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

export default EquipmentLand;
