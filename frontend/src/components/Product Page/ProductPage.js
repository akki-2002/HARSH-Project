import React, { useState } from "react";
import { Link } from "react-router-dom";
import pd1 from "../../components/Images/Product Photos/1.jpeg";
import pd2 from "../../components/Images/Product Photos/10.jpeg";
import "./ProductPage.css";
import Testimonials from "../Home/Testimonials/Testimonials";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

const product = {
  name: "ABCDEFG",
  price: 2000,
  description:
    "At Love Port, we believe in the power of personalization. Our wide range of customizable gifts ensures that each item is crafted with attention to detail and sentiment, making every moment special.",
  images: [pd1, pd2],
  stock: true,
};

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * product.price);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * product.price);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Navbar />
      <span style={{ margin: "16px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "19px",
            color: "black",
          }}
        >
          Home
        </Link>{" "}
        &gt;
        <span
          style={{
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "19px",
          }}
        >
          {product.name}
        </span>
      </span>
      <div className="productMain">
        <div className="prdImgs">
          <div className="prdiMin">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`pd${index + 1}`}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
          <div className="prdiMax">
            <img src={selectedImage} alt="Selected Product" />
          </div>
        </div>
        <div className="prdDets">
          <h1>{product.name}</h1>
          <h1 className="price"> ₹{totalPrice}</h1>
          <p className="tax">Inclusive of all taxes</p>
          <p className="desc">Description</p>
          <p className="desc-p">{product.description}</p>

          <div className="qua">
            <p>Quantity</p>
            <div className="quantity-controls">
              <button onClick={decrementQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <p className="ins">
            {product.stock ? "Item in Stock" : "Out of Stock"}
          </p>

          <div className="abBtns">
            <Link
              to={"/cart"}
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
              }}
            >
              {" "}
              <button>ADD TO CART</button>{" "}
            </Link>
            <Link
              to={"/billing"}
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
              }}
            >
              <button>BUY NOW</button>{" "}
            </Link>
          </div>

          <div className="productDetails">
            <h2>Delivery Information</h2>
            <ul>
              <li>Standard Delivery: 7-9 business days.</li>
              <li>
                Although we make 100% efforts to match the image displayed, the
                actual product delivered may vary in shape or design as per the
                availability.
              </li>
              <li>
                Most orders are delivered on time, but delays can occur due to
                traffic congestion or remote delivery addresses.
              </li>
              <li>
                Once the order is placed for delivery, it cannot be redirected
                to another address also it cannot be cancelled.
              </li>
              <li>
                Although we try not to, occasionally, substitution is necessary
                due to temporary and/or regional unavailability issues. Please
                be noted that we may have to do this without informing you
                because we give utmost importance to delivery on time since most
                of our orders are gifts for a certain occasion.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </>
  );
}

export default ProductPage;
