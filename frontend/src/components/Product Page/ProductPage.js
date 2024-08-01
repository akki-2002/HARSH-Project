import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pd1 from '../../components/Images/Product Photos/1.jpeg';
import pd2 from '../../components/Images/Product Photos/10.jpeg';
import './ProductPage.css';
import Testimonials from '../Home/Testimonials/Testimonials';

const product = {
  name: 'Personalized Gift Set',
  price: 2000,
  description: 'At Love Port, we believe in the power of personalization. Our wide range of customizable gifts ensures that each item is crafted with attention to detail and sentiment, making every moment special.',
  images: [pd1, pd2],
  stock: true,
};

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

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

  return (
    <>
      <div className="productMain">
        <div className="prdImgs">
          <div className="prdiMin">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`pd${index + 1}`} />
            ))}
          </div>
          <div className="prdiMax">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`pd${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="prdDets">
          <h1>{product.name}</h1>
          <h1 className='price'>${totalPrice}</h1>
          <p className='tax'>Inclusive of all taxes</p>
          <p className="desc">Description</p>
          <p>{product.description}</p>

          <div className="qua">
            <p>Quantity</p>
            <div className="quantity-controls">
              <button onClick={decrementQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <p className="ins">{product.stock ? 'Item in Stock' : 'Out of Stock'}</p>

          <div className="abBtns">
            <button>
              <Link to={'/cart'} style={{ textDecoration: 'none', cursor: 'pointer' }}>ADD TO CART</Link>
            </button>
            <button>
              <Link to={'/billing'} style={{ textDecoration: 'none', cursor: 'pointer' }}>BUY NOW</Link>
            </button>
          </div>

          <div className="productDetails">
            <h2>Delivery Information</h2>
            <ul>
              <li>Standard Delivery: 5-7 business days.</li>
              <li>We strive to match the image displayed; however, the actual product may vary in shape or design due to availability.</li>
              <li>Most orders are delivered on time, but delays can occur due to traffic congestion or remote delivery addresses.</li>
              <li>Once the order is prepared for delivery, it cannot be redirected to another address.</li>
              <li>In rare cases, substitution may be necessary due to temporary or regional unavailability, and we may do this without prior notice to ensure timely delivery.</li>
            </ul>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
}

export default ProductPage;
