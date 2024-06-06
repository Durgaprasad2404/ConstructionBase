import React from "react";
import { Link } from "react-router-dom";
import "./equipmentLand.css";
import { LandingpageProducts } from "../../itemsData/productsData";
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
            {LandingpageProducts.map((i) => {
              if (i.GROUP === "EquipmentItems") {
                return (
                  <div className="EquipmentLand-product" key={i.ID}>
                    <Link to={`/product/${i.ID}`}>
                      <img
                        src={i["IMG URL"]}
                        alt="#"
                        className="EquipmentLand-img"
                      />
                    </Link>
                    <div>
                      <h6>{i.ITEMNAME}</h6>
                      <p className="EquipmentLand-product-para">
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

export default EquipmentLand;
