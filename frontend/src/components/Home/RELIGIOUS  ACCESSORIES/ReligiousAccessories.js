import React, { useEffect, useState } from "react";
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
import { useAuthContext } from "../../../hooks/useAuthContext";
import tick from '../../Images/tick.png'

function ReligiousAccessories() {


  // Array of product objects
  // const products = [
  //   { id: 1, name: "CABC", price: 599, image: img5 },
  //   { id: 2, name: "CABC", price: 599, image: img6 },
  //   { id: 3, name: "CABC", price: 599, image: img7 },
  //   { id: 4, name: "CABC", price: 599, image: img8 },
  //   { id: 5, name: "ABCt", price: 599, image: img9 },
  //   { id: 6, name: "CABC", price: 599, image: img10 },
  //   { id: 7, name: "ABCt", price: 599, image: img11 },
  //   { id: 8, name: "CABC", price: 599, image: img12 },

  //   // Add more products as needed
  // ];

  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://harsh-project-4-kmzz.onrender.com/products/getallproducts');
    const json = await response.json();
    if (response.ok) {
      const daProducts = json.products.filter((prd)=> prd.category === "Religious Accessories")
      setProducts(daProducts);
      console.log("products", json.products);
    }
  };
  useEffect(() => {
    

    // if (user) {
      fetchData();
    // }

  }, [user]);

  const updateUserCart = async () => {
    try {
      const response = await fetch(`https://harsh-project-4-kmzz.onrender.com/users/getuserbyid/66b64ee64fb94cedf28702b0`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });

      const updatedUser = await response.json();
      console.log('updated user', updatedUser)
      if (response.ok) {
        // setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify({token: user.token, user: updatedUser}));
        alert('Product added to cart')
        console.log("updt", user)
      }
    } catch (error) {
      console.error('Failed to update user cart:', error);
    }
  };
  

  const handleAddToCart = async (product) => {
    try {

      if(!user)
      {
       return alert('Login in to add to cart')
      }

      const formData = {
        'productId': product._id,
        'quantity': 1
      }
      console.log(formData)
      
      const response = await fetch(`https://harsh-project-4-kmzz.onrender.com/users/addtocart/${user.user?._id}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      });
  
      const json = await response.json();
      if (response.ok) {
        console.log('successfully added to the cart', json);
        updateUserCart()
        console.log('adt user', user);
      } else {
        console.log('Failed to add to cart', json);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
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
            <div className="product-item" key={product._id}>
              <Link to={`/product/${product._id}`}>
              <img src={`https://harsh-project-4-kmzz.onrender.com/uploads/${product.productImages[0]}`} alt={product.title} className="hoverable" />
            </Link>
              <div className="product-details">
                <p className="model-type">{product.title}</p>
                <div className="price-container">
                  <p className="price">&#8377;{product.price}</p>
                  {/* <Link to={"/cart"}> */}
                  <div>
                    <FaCartPlus className="fa-cart-plus" onClick={()=>handleAddToCart(product)}/>
                  </div>
                  {/* </Link> */}
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
