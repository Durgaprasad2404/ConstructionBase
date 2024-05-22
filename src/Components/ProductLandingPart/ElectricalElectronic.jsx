import React from "react";
import { Link } from "react-router-dom";
import "./Eepro.css";
import { LandingpageProducts } from "../../itemsData/productsData";

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
            {LandingpageProducts.map((i) => {
              if (i.Group === "EEItem") {
                return (
                  <div
                    className="building-construction-EE-product-container"
                    key={i.id}
                  >
                    <Link to={`/product/${i.id}`}>
                      <img
                        src={i.imgUrl}
                        alt="#"
                        className="building-construction-EE-img"
                      />
                    </Link>
                    <div>
                      <h4>{i.itemname}</h4>
                      <p className="building-construction-EE-product-para">
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

export default ElectricalElectronic;
