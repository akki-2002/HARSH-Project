import React, { useState } from "react";
import { Link } from 'react-router-dom';
import backprint_t from "../Images/Product Photos/12.jpeg";
import Navbar from "../Home/Navbar/Navbar";


function OrderDetails() {

    const orderItems = [
        {
          id: 1,
          name: "Corporate Gift Set",
          category: "Corporate Gifts",
          price: 2000,
          quantity: 2,
          image: backprint_t,
        },
        {
          id: 2,
          name: "Corporate Gift Set",
          category: "Corporate Gifts",
          price: 2000,
          quantity: 1,
          image: backprint_t,
        },
        // Add more items if needed
      ];
    
      const totalAmount = orderItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    
      const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        country: "INDIA",
        streetAddress: "123 Street Name",
        townCity: "City Name",
        state: "Maharashtra",
        pinCode: "123456",
        phone: "9876543210",
        email: "john.doe@example.com",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

   return (
    <>
     <Navbar></Navbar>
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
                    onChange={handleChange}
                    readOnly
                  />
                </div>

                <div className="firstname">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                    onChange={handleChange}
                    readOnly
                  />
                </div>

                <div className="firstname">
                  <label>State</label>
                  <select
                    id="states"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    readOnly
                  >
                    <option value="State Name">{formData.state}</option>
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
                    onChange={handleChange}
                    readOnly
                  />
                </div>

                <div className="firstname">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                  onChange={handleChange}
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
              {orderItems.map((item) => (
                <div key={item.id} className="cItem1">
                  <div className="cItemImg">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cItemDetails">
                    <h2>{item.name}</h2>
                    <p>{item.category}</p>
                    <p className="quantity">Quantity: x{item.quantity}</p>
                  </div>
                  <div className="cItemPrice">
                    <h3>₹{item.price}</h3>
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

export default OrderDetails