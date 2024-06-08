import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { MdVerticalAlignTop } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="text-center sticky-bottom">
        <button onClick={scrollToTop} className="back-btn">
          <i>
            <MdVerticalAlignTop />
          </i>
        </button>
      </div>
      <hr />
      <footer>
        <div className="footCon1">
          <img src="../Assets/E-logo.png" alt="#" className="logofoot" />
          <p>Your one-stop shop for the tools that build tomorrow.</p>
        </div>
        <div className="footCon2">
          <ul className="footlist">
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              <li className="footlistItem">Home</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/rentalSale"
            >
              <li className="footlistItem">Rental & Sale</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/products"
            >
              <li className="footlistItem">Products</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/services"
            >
              <li className="footlistItem">Services</li>
            </Link>
          </ul>
        </div>
        <div className="footCon3">
          <b>Contact Us</b>
          <br />
          <div>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Let me know you name"
            />
            <button>contact</button>
          </div>
          <div className="connect">
            <i>Connect With Us</i>
            <br />
            <span className="icon">
              <FaWhatsappSquare />
            </span>
            <span className="icon">
              <FaFacebookSquare />
            </span>
            <span className="icon">
              <FaYoutubeSquare />
            </span>
            <span className="icon">
              <FaTwitterSquare />
            </span>
            <span className="icon">
              <FaInstagramSquare />
            </span>
          </div>
        </div>
      </footer>
      <div className="copyright">2024 @copyright</div>
    </>
  );
}

export default Footer;
