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
              if (i.Group === "EquipmentItem") {
                return (
                  <div className="EquipmentLand-product" key={i.id}>
                    <Link to={`/product/${i.id}`}>
                      <img
                        src={i.imgUrl}
                        alt="#"
                        className="EquipmentLand-img"
                      />
                    </Link>
                    <div>
                      <h4>{i.itemname}</h4>
                      <p className="EquipmentLand-product-para">
                        {i.description}
                      </p>
                      <span>
                        &#8377; {i.price} <br />
                      </span>
                      <span className="oldprice"> &#8377; {i.oldprice}</span>
                      <span className="offer">{i.offer}% OFF</span>
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
