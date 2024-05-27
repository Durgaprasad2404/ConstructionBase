import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BuildingConstruction from "./ProductLandingPart/BuildingConstruction";
import BestDeal from "./ProductLandingPart/BestDeal";
import Productnavbar from "./ProductLandingPart/Productnavbar";
import ElectricalElectronic from "./ProductLandingPart/ElectricalElectronic";
import Footer from "./Footer";
import TopPick from "./ProductLandingPart/TopPick";
import EquipmentLand from "./ProductLandingPart/EquipmentLand";

function Products() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollTop();
  });
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
      <div className="product-bgcontainer">
        <h1 className="product-main-heading">Products</h1>
        <p className="ps-2">
          Discover our range of premium products designed to elevate your
          everyday living
        </p>
        <div className="most-like-products-bgcontainer">
          <h4>Most Liked Products</h4>
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
                  <h5>Red Clay Bricks</h5>
                  <p className="most-like-product-para">
                    High-quality red clay bricks for construction
                  </p>
                  &#8377; 12 <br />
                  <span className="oldprice"> &#8377; 20</span>
                  <span className="offer">10% OFF</span>
                </div>
              </div>
              <div className="most-like-product-cont">
                <Link to={`/product/33`}>
                  <img
                    src="./Assets/building/b13.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <div>
                  <h5>TMT Bars</h5>
                  <p className="most-like-product-para">
                    Thermo Mechanically Treated (TMT) bars for superior strength
                  </p>
                  &#8377; 120 <br />
                  <span className="oldprice"> &#8377; 200</span>
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
        <ElectricalElectronic />
        <div className="offerBg">
          <h1 className="offerHeading">Brand New Offers</h1>
          <div className="offerBG">
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
                <img
                  src="../Assets/offers/sand.jpg"
                  alt="#"
                  className="offer"
                />
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
        <BuildingConstruction />
        <TopPick />
        <EquipmentLand />
      </div>
      <Footer />
    </>
  );
}

export default Products;
