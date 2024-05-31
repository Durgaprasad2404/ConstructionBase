import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { pro } from "../../itemsData/productsData";
import Footer from "../Footer";

function SingleProduct(props) {
  const { id } = useParams();
  const item = pro.find((i) => i.ID === id);
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
    <>
      <div className="singleItem">
        <div>
          <img src={item["IMG URL"]} alt="#" className="singleimg" />
          <p>{item.DESCRIPTION}</p>
        </div>
        <div className="singleitem-details">
          <div>
            <h1>{item.ITEMNAME}</h1>
            <p>
              &#8377; {item.PRICE}{" "}
              <span className="offer">{item.OFFER}% OFF</span>
            </p>
            <p>
              This essential construction tool is a heavy-duty apparatus
              designed to blend various construction materials with precision
              and efficiency.
            </p>
          </div>
          <div>
            <button type="button" className="cartBtn">
              View Contact
            </button>
            <button type="button" className="buyBtn">
              Send Quote
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
