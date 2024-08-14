import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import prod1 from "../../components/Images/Product Photos/12.jpeg";
import cross from "../../components/Images/cross.png";
import arrow_back from "../../components/Images/Arrow_back.png";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useAuthContext } from "../../hooks/useAuthContext";


function Cart() {
  
  const {user} = useAuthContext()
  // const [cartItems, setCartItems]
  const [adtItems, setAdtItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    if (user) {
      const response = await fetch(`http://localhost:5000/users/getuserbyid/${user.user?._id}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setAdtItems(json.cart);
      }
    }
  };

useEffect(() => {
  

  fetchData();
}, [user]);

// Use another useEffect to monitor cartItems changes
useEffect(() => {
  const fetchData = async () => {
    try {
      const productPromises = adtItems.map(item => 
        fetch(`http://localhost:5000/products/getproductbyid/${item.product}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          }
        }).then(response => response.json())
      );

      const products = await Promise.all(productPromises);
     
      // setCartItems(products)
      

      // Assuming you want to set the fetched products in the cart items
      const updatedCartItems = products.map((product, index) => ({
        ...adtItems[index],
        productDetails: product // Adding product details to each cart item
      }));

      setCartItems(updatedCartItems);
      
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  // console.log('products', cartItems)

  if (adtItems && adtItems.length > 0) {
    fetchData();
    console.log('adtItems', cartItems)
  }
}, [adtItems, user]);



  const handleRemove = async(id) => {
    // const updatedCartItems = cartItems.filter((item) => item.id !== id);
    // setCartItems(updatedCartItems);
    // console.log(id)

    try {
      const formData = {
        'productId': id
      }
      console.log(formData)
      
      const response = await fetch(`http://localhost:5000/users/removefromcart/${user.user?._id}`, {
        method: "DELETE",
        body: JSON.stringify(formData),
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      });
  
      const json = await response.json();
      if (response.ok) {
        console.log('successfully removed from the cart', json);
        // updateUserCart()
        fetchData()
        console.log('adt user', user);
      } else {
        console.log('Failed to remove from cart', json);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
    <Navbar></Navbar>
    
    <div className="cartMain">
      <div className="cartTop">
        <div className="cartLeftMain">
          <div className="cartLeft">
            <h1>Cart</h1>
            <div className="clContent">
              {cartItems?.map((item) => (
                
                <div className="cItem1" key={item._id}>
                  <Link to={`/product/${item.productDetails?.product?._id}`} style={{ textDecoration: "none", cursor: "pointer" }}>
                    <div className="cItem">
                      <div className="cItemImg">
                        {" "}
                        <img src={`http://localhost:5000/uploads/${item.productDetails?.product?.productImages[0]}`} alt={item.title} />{" "}
                      </div>
                      <div className="cItemDetails">
                        <h2>{item.productDetails?.product?.title}</h2>
                        <div className="p">
                          <p>CATEGORY - {item.productDetails?.product?.category}</p>
                        </div>
                        <div className="price">₹{item.productDetails?.product?.price} x {item.quantity}</div>
                      </div>
                    </div>{" "}
                  </Link>

                  <div className="cItemRemove">
                    <p onClick={() => handleRemove(item.productDetails?.product?._id)}>
                      REMOVE <img src={cross} alt="Remove" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cartRgt">
          <div className="cartTotalHeading">
            <h1>Cart Total</h1>
          </div>
          <div className="cartTotal">
            <p>Total</p>
            <span>
              ₹{cartItems?.reduce((total, item) => total + item.productDetails?.product?.price * item.quantity, 0)}
            </span>
          </div>
          <Link to={"/billing"} style={{ textDecoration: "none", cursor: "pointer" }}>
            <div className="cartCheckoutBtn">
              <button>Proceed to Checkout</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="cartBottom">
        <div className="clContinueShop">
          <Link to={"/"}>
            <img src={arrow_back} alt="Continue Shopping" />
          </Link>
          <p>Continue Shopping</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );

}

export default Cart;
