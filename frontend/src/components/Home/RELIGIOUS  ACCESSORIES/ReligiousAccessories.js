import React from "react";
import { Link } from "react-router-dom";
import Religious from "../../Images/religious.png";
import img5 from "../../Images/Product Photos/5.jpeg";
import img6 from "../../Images/Product Photos/6.jpeg";
import img7 from "../../Images/Product Photos/7.jpeg";
import img8 from "../../Images/Product Photos/8.jpeg";
import img9 from "../../Images/Product Photos/9.jpeg";
import img10 from "../../Images/Product Photos/10.jpeg";
import img11 from "../../Images/Product Photos/11.jpeg";
import img12 from "../../Images/Product Photos/12.jpeg";
import { FaCartPlus } from "react-icons/fa";
import './ReligiousAccessories.css'

function ReligiousAccessories() {


  // Array of product objects
  const products = [
    { id: 1, name: "CABC", price: 599, image: img5 },
    { id: 2, name: "CABC", price: 599, image: img6 },
    { id: 3, name: "CABC", price: 599, image: img7 },
    { id: 4, name: "CABC", price: 599, image: img8 },
    { id: 4, name: "ABCt", price: 599, image: img9 },
    { id: 4, name: "CABC", price: 599, image: img10 },
    { id: 4, name: "ABCt", price: 599, image: img11 },
    { id: 4, name: "CABC", price: 599, image: img12 },

    // Add more products as needed
  ];
  return (
    <>
      <div className="religious-accessories-container">
        <img
          src={Religious}
          alt="Corporate Gifts"
          className="religious-accessories-image"
        />
        <div className="overlay">
          <div className="text-content">
            <h1>Religious Accesories</h1>
            <p>
            Kadas, murtis and many more..
            </p>
          </div>
          <Link
            to={"/religiousAll"}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="sub-title">
        <div className="product-section">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <Link to={'/product'}>
              <img src={product.image} alt={product.name} className="hoverable" />
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

export default ReligiousAccessories;
