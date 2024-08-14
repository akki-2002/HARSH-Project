import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import backprint_t from "../Images/Product Photos/12.jpeg";
import Navbar from "../Home/Navbar/Navbar";
import { useAuthContext } from "../../hooks/useAuthContext";

function OrderDetails() {
  const { user } = useAuthContext();
  const [orderItems, setOrderItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    state: "",
    pinCode: "",
    phone: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/bills/getbillbyid/${id}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        const json = await response.json();

        if (response.ok) {
          setOrderItems(json.orderItems || []); // Ensure the data is structured correctly
          setFormData({
            firstName: json.firstName || "",
            lastName: json.lastName || "",
            country: json.country || "",
            streetAddress: json.address || "",
            townCity: json.city || "",
            state: json.state || "",
            pinCode: json.pincode || "",
            phone: json.phoneNumber || "",
            email: json.email || "",
          });
          console.log("User Order Data:", json);
        } else {
          console.log("Failed to fetch orders", json);
        }
      } catch (error) {
        console.log('Error fetching orders:', error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user, id]);


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

const totalAmount = cartItems.reduce(
  (total, item) => total + item.productDetails?.product?.price * item.quantity,
  0
);

  return (
    <>
      <Navbar />
      <div className="billingMain">
        <div className="billingLeftMain">
          <div className="billingLeft">
            <div className="blHeading">
              <h1>Billing and Shipping Details</h1>
            </div>

            <form className="form" action="">
              <div className="customerName">
                <div className="firstname">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    readOnly
                  />
                </div>

                <div className="firstname">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    readOnly
                  />
                </div>
              </div>

              <div className="newPass">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  readOnly
                />
                <p>Currently available for India.</p>
              </div>

              <div className="firstname">
                <label>Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  readOnly
                />
              </div>

              <div className="customerName">
                <div className="firstname">
                  <label>Town/City</label>
                  <input
                    type="text"
                    name="townCity"
                    value={formData.townCity}
                    readOnly
                  />
                </div>

                <div className="firstname">
                  <label>State</label>
                  <select
                    id="states"
                    name="state"
                    value={formData.state}
                    readOnly
                  >
                    <option value={formData.state}>{formData.state}</option>
                  </select>
                </div>
              </div>

              <div className="customerName">
                <div className="firstname">
                  <label>Pin Code</label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    readOnly
                  />
                </div>

                <div className="firstname">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    readOnly
                  />
                </div>
              </div>

              <div className="firstname">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
        <div className="billingRgt">
          <div className="cartRgtt">
            <div className="cartTotalHeading">
              <h1>Order Summary</h1>
            </div>
            <div className="clContentt">
              {cartItems.map((item) => (
                <div key={item._id} className="cItem1">
                  <div className="cItemImg">
                    <img src={`http://localhost:5000/uploads/${item.productDetails?.product?.productImages[0]}` || backprint_t} alt={item.name} />
                  </div>
                  <div className="cItemDetails">
                    <h2>{item.productDetails?.product?.name}</h2>
                    <p>{item.productDetails?.product?.category}</p>
                    <p className="quantity">Quantity: x{item.quantity}</p>
                  </div>
                  <div className="cItemPrice">
                    <h3>₹{item.productDetails?.product?.price}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="clTotal">
              <h2>Total Amount:</h2>
              <h2>₹{totalAmount}</h2>
            </div>
            <div className="button-Container">
              <button className="actionButton3">View Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
