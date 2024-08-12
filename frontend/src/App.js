import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";



import ReligiousAll from "./components/All Products/ReligiousAll";
import DailyAll from "./components/All Products/DailyAll";
import ProductPage from "./components/Product Page/ProductPage";
import Cart from "./components/Cart Page/Cart";
import Billing from "./components/Billing/Billing";

import Order from "./components/Order/Order";
import OrderHistory from "./components/Order/OrderHistory";

import AcDetails from "./components/Order/AcDetails";

import Signin from "./components/Login Signup/Signin";
import Signup from "./components/Login Signup/Signup";

import AllAdminProducts from "./components/Admin/AllAdminProducts/AllAdminProducts";
import AddProduct from "./components/Admin/Add Product/AddProduct";
import EditProduct from "./components/Admin/Edit Product/EditProduct"
import CustOrders from "./components/Admin/Cust Orders/CustOrders";
import ViewCustOrders from "./components/Admin/View Order/ViewCustOrder"
import OrderDetails from "./components/Order/OrderDetails";
import Profile from "./components/Admin/Profile/Profile";
// import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./components/Home/Home";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user} = useAuthContext()
  
  console.log("user", user)
  return (
    <>
      <Router>
        <Routes>
          {/* {user?.user?.userType === 'User' &&  */}
            
         
        {/* } */}
        {/* { <Route path="/" element={}/>  */}
          <Route
          path="/"
          element={
            user?.user?.userType === 'Admin' ?
            <AllAdminProducts />:
            <Home/>
            
              
          }
          />
        {/* } */}
        
            
          <Route path="/religiousAll" element={<ReligiousAll />} />
          <Route path="/dailyAll" element={<DailyAll />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/order" element={<Order />}>
            <Route path="/order" element={<OrderHistory />} />
            <Route path="/order/acdetails" element={<AcDetails />} />
          </Route>
          <Route path="/orderDetails" element={<OrderDetails />} />


          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/adminOrders" element={<CustOrders />} />
          <Route path="/viewCustOrder" element={<ViewCustOrders />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
