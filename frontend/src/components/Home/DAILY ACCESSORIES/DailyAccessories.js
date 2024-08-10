import React from "react";
import { Link } from "react-router-dom";
import PersonalizedGiftImg from "../../Images/daily.png";
import img13 from "../../Images/Product Photos/13.jpeg";
import img14 from "../../Images/Product Photos/14.jpeg";
import img15 from "../../Images/Product Photos/15.jpeg";
import img16 from "../../Images/Product Photos/16.jpeg";
import "./DailyAccessories.css";
import { FaCartPlus } from "react-icons/fa";

function DailyAccessories() {
  // Array of product objects
  const products = [
    { id: 1, name: "ABCDEF", price: 599, image: img13 },
    { id: 2, name: "ABCDEF", price: 599, image: img14 },
    { id: 3, name: "ABCDEF", price: 599, image: img15 },
    { id: 4, name: "ABCDEF", price: 599, image: img16 },
  ];
  return (
    <>
      <div className="daily-accessories-container">
        <img
          src={PersonalizedGiftImg}
          alt="Personalized Gifts"
          className="daily-accessories-image"
        />
        <div className="overlay2">
          <div className="text-content2">
            <h1>Daily Accessories</h1>
            <p>Accessories for every occasion.</p>
          </div>
          <Link
            to={"/dailyAll"}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <button className="shop-now-button2">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="sub-title">
        <div className="product-section">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <Link to={"/product"}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="hoverable"
                />
              </Link>
              <div className="product-details">
                <p className="model-type">{product.name}</p>
                <div className="price-container">
                  <p className="price">&#8377;{product.price}</p>

                  <Link to={"/cart"}>
                    <FaCartPlus className="fa-cart-plus" />
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DailyAccessories;
