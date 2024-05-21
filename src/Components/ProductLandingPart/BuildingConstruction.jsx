import React from "react";
import { Link } from "react-router-dom";
import "./buildingConstruction.css";
function BuildingConstruction() {
  return (
    <>
      <div className="building-construction-materials-bgcontainer">
        <h2 className="building-construction-materials-heading">
          Building Construction Materials
        </h2>
        <div className="building-construction-materials-container">
          <div
            style={{
              backgroundImage:
                "url('./Assets/building-construction-materials.png')",
            }}
            className="building-construction-materials"
          >
            <p className="building-construction-materials-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Link to="/building">
              <button className="building-construction-materials-btn">
                View All
              </button>
            </Link>
          </div>
          <div className="building-construction-materials-products">
            <div className="building-construction-materials-product">
              <div>
                <img
                  src="./Assets/building/b1.png"
                  alt="#"
                  className="building-construction-materials-img"
                />
              </div>
              <div>
                <h4>Red Clay Bricks</h4>
                <p className="building-construction-materials-product-para">
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
            <div className="building-construction-materials-product">
              <div>
                <img
                  src="./Assets/building/b1.png"
                  alt="#"
                  className="building-construction-materials-img"
                />
              </div>
              <div>
                <h4>Red Clay Bricks</h4>
                <p className="building-construction-materials-product-para">
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
            <div className="building-construction-materials-product">
              <div>
                <img
                  src="./Assets/building/b1.png"
                  alt="#"
                  className="building-construction-materials-img"
                />
              </div>
              <div>
                <h4>Red Clay Bricks</h4>
                <p className="building-construction-materials-product-para">
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
            <div className="building-construction-materials-product">
              <div>
                <img
                  src="./Assets/building/b1.png"
                  alt="#"
                  className="building-construction-materials-img"
                />
              </div>
              <div>
                <h4>Red Clay Bricks</h4>
                <p className="building-construction-materials-product-para">
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
            <div className="building-construction-materials-product">
              <div>
                <img
                  src="./Assets/building/b1.png"
                  alt="#"
                  className="building-construction-materials-img"
                />
              </div>
              <div>
                <h4>Red Clay Bricks</h4>
                <p className="building-construction-materials-product-para">
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
            <div className="building-construction-materials-product">
              <div>
                <img
                  src="./Assets/building/b1.png"
                  alt="#"
                  className="building-construction-materials-img"
                />
              </div>
              <div>
                <h4>Red Clay Bricks</h4>
                <p className="building-construction-materials-product-para">
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
      </div>
    </>
  );
}

export default BuildingConstruction;
