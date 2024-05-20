import React from "react";
import { productData } from "../itemsData/productsData";
import Footer from "./Footer";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function Equipment() {
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1>Equipment For Construction</h1>
        <div style={{ margin: "20px 25px" }} id="Electrical">
          <h2 className="shopSideHeading">Electrical</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Electrical") {
                return (
                  <Allproducts
                    key={i.id}
                    id={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div style={{ margin: "20px 25px" }} id="Handtools">
          <h2 className="shopSideHeading">Hard Tools</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Hard Tools") {
                return (
                  <Allproducts
                    key={i.id}
                    id={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div style={{ margin: "20px 25px" }} id="Heavy">
          <h2 className="shopSideHeading">Heavy Machinery</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Heavy Machinery") {
                return (
                  <Allproducts
                    key={i.id}
                    id={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div style={{ margin: "20px 25px" }} id="Ladders">
          <h2 className="shopSideHeading">Ladders</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Ladders") {
                return (
                  <Allproducts
                    key={i.id}
                    id={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div style={{ margin: "20px 25px" }} id="Safety">
          <h2 className="shopSideHeading">Safety Gear</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Safety Gear") {
                return (
                  <Allproducts
                    key={i.id}
                    id={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Equipment;
