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
              Electrical equipment includes a wide-ranging field of devices. It
              would be impossible to include information on all items of
              equipment, and this chapter will therefore be limited to coverage
              of products of some of the major industries
            </p>
            <Link to="/Electrical_Electronic_Items">
              <button className="building-construction-EE-btn">View All</button>
            </Link>
          </div>
          <div className="building-construction-EE-products-container">
            {LandingpageProducts.map((i) => {
              if (i.GROUP === "Electrical_Electronic_Items") {
                return (
                  <div
                    className="building-construction-EE-product-container"
                    key={i.ID}
                  >
                    <Link to={`/product/${i.ID}`}>
                      <img
                        src={i["IMG URL"]}
                        alt="#"
                        className="building-construction-EE-img"
                      />
                    </Link>
                    <div>
                      <h6>{i.ITEMNAME}</h6>
                      <p className="building-construction-EE-product-para ">
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

export default ElectricalElectronic;
