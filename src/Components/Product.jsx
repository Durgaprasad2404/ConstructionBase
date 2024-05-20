import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BuildingConstruction from "./ProductLandingPart/BuildingConstruction";
import BestDeal from "./ProductLandingPart/BestDeal";
import Productnavbar from "./ProductLandingPart/Productnavbar";
import ElectricalElectronic from "./ProductLandingPart/ElectricalElectronic";
import Footer from "./Footer";

function Products() {
  const sets = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <>
      <Productnavbar />
      <div>
        <h1>Products</h1>
        <div className="most-like-products-bgcontainer">
          <h2>Most Liked Products</h2>
          <div className="most-like-products-container">
            <div className="most-like-product">
              <div className="most-like-product-cont">
                <Link to={`/product/21`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <div>
                  <h4>Red Clay Bricks</h4>
                  <p className="most-like-product-para">
                    High-quality red clay bricks for construction
                  </p>
                  &#8377; 12 <br />
                  <span className="oldprice"> &#8377; 20</span>
                  <span className="offer">10% OFF</span>
                </div>
              </div>
              <div className="most-like-product-cont">
                <Link to={`/product/21`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <div>
                  <h4>Red Clay Bricks</h4>
                  <p className="most-like-product-para">
                    High-quality red clay bricks for construction
                  </p>
                  &#8377; 12 <br />
                  <span className="oldprice"> &#8377; 20</span>
                  <span className="offer">10% OFF</span>
                </div>
              </div>
            </div>
            <div className="most-like-product-img">
              <img src="./Assets/most2.png" alt="#" />
            </div>
          </div>
        </div>
        {/* please navigate folder name ProductLandingPart */}
        <BestDeal />
        <BuildingConstruction />
        <ElectricalElectronic />
        <div className="product-offer">
          <Slider {...sets}>
            <div className="offerCon">
              <img
                src="../Assets/offers/bricksOffer.jpg"
                alt="#"
                className="offer"
              />
            </div>
            <div className="offerCon">
              <img
                src="../Assets/offers/cementOffer.jpg"
                alt="#"
                className="offer"
              />
            </div>
            <div className="offerCon">
              <img src="../Assets/offers/sand.jpg" alt="#" className="offer" />
            </div>
            <div className="offerCon">
              <img
                src="../Assets/offers/ironOffer.jpg"
                alt="#"
                className="offer"
              />
            </div>
            <div className="offerCon">
              <img
                src="../Assets/offers/cementOffer.jpg"
                alt="#"
                className="offer"
              />
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
