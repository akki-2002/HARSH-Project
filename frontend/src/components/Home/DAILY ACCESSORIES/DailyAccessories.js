import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersonalizedGiftImg from "../../Images/daily.png";
import img13 from "../../Images/Product Photos/13.jpeg";
import img14 from "../../Images/Product Photos/14.jpeg";
import img15 from "../../Images/Product Photos/15.jpeg";
import img16 from "../../Images/Product Photos/16.jpeg";
import "./DailyAccessories.css";
import { FaCartPlus } from "react-icons/fa";
import { useAuthContext } from "../../../hooks/useAuthContext";

function DailyAccessories() {
  // Array of product objects
  // const products = [
  //   { id: 1, name: "ABCDEF", price: 599, image: img13 },
  //   { id: 2, name: "ABCDEF", price: 599, image: img14 },
  //   { id: 3, name: "ABCDEF", price: 599, image: img15 },
  //   { id: 4, name: "ABCDEF", price: 599, image: img16 },
  // ];

  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/products/getallproducts');
    const json = await response.json();
    if (response.ok) {
      const daProducts = json.products.filter((prd)=> prd.category === "Daily Accessories")
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
      const response = await fetch(`http://localhost:5000/users/getuserbyid/66b64ee64fb94cedf28702b0`, {
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
      
      const response = await fetch(`http://localhost:5000/users/addtocart/${user.user?._id}`, {
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
          {products?.map((product) => (
            <div className="product-item" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img
                  src={`http://localhost:5000/uploads/${product.productImages[0]}`}
                  alt={product.title}
                  className="hoverable"
                />
              </Link>
              <div className="product-details">
                <p className="model-type">{product.title}</p>
                <div className="price-container">
                  <p className="price">&#8377;{product.price}</p>

                  {/* <Link to={"/cart"}> */}
                    <FaCartPlus className="fa-cart-plus" onClick={()=>handleAddToCart(product)}/>
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

export default DailyAccessories;
