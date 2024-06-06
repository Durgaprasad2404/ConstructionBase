import React from "react";
import { Link } from "react-router-dom";
import "./buildingConstruction.css";
import { LandingpageProducts } from "../../itemsData/productsData";
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
            {LandingpageProducts.map((i) => {
              if (i.GROUP === "buildingItem") {
                return (
                  <div
                    className="building-construction-materials-product"
                    key={i.ID}
                  >
                    <Link to={`/product/${i.ID}`}>
                      <img
                        src={i["IMG URL"]}
                        alt="#"
                        className="building-construction-materials-img"
                      />
                    </Link>
                    <div>
                      <h6>{i.ITEMNAME}</h6>
                      <p className="building-construction-materials-product-para">
                        {i.DESCRIPTION}
                      </p>
                      <span>
                        &#8377; {i.PRICE} <br />
                      </span>
                      <span className="oldprice"> &#8377; {i.OLDPRICE}</span>
                      <span className="offer">{i.OFFER}% OFF</span>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildingConstruction;
