import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./bestdeal.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        padding: "15px",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}
function BestDeal() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="best-deals-bgcontainer">
        <h2 className="best-deals-heading">Best Deal's</h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/21`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/26`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/29`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/48`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/75`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/11`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/1`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
            <div>
              <div className="best-deal-product">
                <Link to={`/product/14`}>
                  <img
                    src="./Assets/building/b1.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <h4>Red Clay Bricks</h4>
                <div className="off-Con">
                  <p className="best-deal-offer">15% OFF</p>
                  <i>Limited Offer</i>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default BestDeal;
