import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./product.css";

function Allproducts(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  });
  return (
    <div className="item-con">
      <h5 className="itemname-heading">{props.itemname}</h5>
      <Link to={`/product/${props.id}`}>
        <img src={props.imgUrl} alt="#img" className="img" />
      </Link>
      <p>
        Price: &#8377;{props.price} <br />
        <span className="oldprice"> &#8377; {props.oldprice}</span>
        <span className="offer">{props.offer}% OFF</span>
      </p>
      <div>
        <Link to={`/product/${props.id}`}>
          <button className="view-btn">View Number</button>
        </Link>
        <button className="best-btn">Get Best Price</button>
      </div>
    </div>
  );
}

export default Allproducts;
