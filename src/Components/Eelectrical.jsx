import React from "react";
import { productData } from "../itemsData/productsData";
import Footer from "./Footer";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function ElectronicsElectrical() {
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1>Electronics & Electrical</h1>
        <div style={{ margin: "20px 25px" }} id="Cables">
          <h2 className="shopSideHeading">Cables & wires</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Wires") {
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
        <div style={{ margin: "20px 25px" }} id="Circuites">
          <h2 className="shopSideHeading">Circuites</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Circuits") {
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
        <div style={{ margin: "20px 25px" }} id="Pannels">
          <h2 className="shopSideHeading">Pannels</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Panels") {
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
        <div style={{ margin: "20px 25px" }} id="Pipes">
          <h2 className="shopSideHeading">Pipes</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Pipes") {
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
        <div style={{ margin: "20px 25px" }} id="WireCutters">
          <h2 className="shopSideHeading">Wire Cutters</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Wire Cutters") {
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
      </div>
      <Footer />
    </>
  );
}

export default ElectronicsElectrical;
