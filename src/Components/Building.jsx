import React from "react";
import { productData } from "../itemsData/productsData";
import Footer from "./Footer";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function Building() {
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Building & Construction</h1>
        <div style={{ margin: "10px" }} id="Bricks">
          <div className="allItems">
            {productData.map((i) => {
              if (i.Group === "buildingItem") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
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
        {/* <div style={{ margin: "20px 25px" }} id="Cement">
          <h2 className="shopSideHeading">Cement</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Cement") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
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
        <div style={{ margin: "20px 25px" }} id="Iron">
          <h2 className="shopSideHeading">Iron</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Iron") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
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
        <div style={{ margin: "20px 25px" }} id="Woods">
          <h2 className="shopSideHeading">Woods</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Woods") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
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
        <div style={{ margin: "20px 25px" }} id="CrushedStone">
          <h2 className="shopSideHeading">Crushed stone</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Crushed stone") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
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
        <div style={{ margin: "20px 25px" }} id="Sand">
          <h2 className="shopSideHeading">Sand</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Sand") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
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
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Building;
