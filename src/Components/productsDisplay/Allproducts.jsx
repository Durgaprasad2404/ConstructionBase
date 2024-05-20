import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

function Allproducts(props) {
  return (
    <div className="item-con">
      <p>{props.itemname}</p>
      <Link to={`/product/${props.id}`}>
        <img src={props.imgUrl} alt="#img" className="img" />
      </Link>
      <p>
        &#8377; {props.price} <br />
        <span className="oldprice"> &#8377; {props.oldprice}</span>
        <span className="offer">{props.offer}% OFF</span>
      </p>
      <button className="view-btn">View Number</button>
      <button className="best-btn">Get Best Price</button>
    </div>
  );
}

export default Allproducts;
