import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./product.css";
import { pro } from "../../itemsData/productsData";
import Footer from "../Footer";

function SingleProduct(props) {
  const { id } = useParams();
  const item = pro.find((i) => i.ID === id);
  const similar_products = pro.filter((product) =>
    product.CATEGORY.includes(item.CATEGORY)
  );
  // console.log(fil);
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
          <p className="ps-2">{item.DESCRIPTION}</p>
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
          <div className="btns-container">
            <button type="button" className="cartBtn">
              View Contact
            </button>
            <button type="button" className="buyBtn">
              Send Quote
            </button>
          </div>
        </div>
      </div>
      <h4 className="py-3 ps-2">Similar Products</h4>
      <div className="similar-products-container ps-2">
        {similar_products.map((item) => {
          return (
            <div key={item.ID} className="text-center ms-3 bg-secondary p-3">
              <Link to={`/product/${item.ID}`}>
                <img src={item["IMG URL"]} alt="#" className="img" />
              </Link>
              <h5 className="text-white">{item.ITEMNAME}</h5>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
