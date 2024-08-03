import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Home/Navbar/Navbar";
import Slider from "./components/Home/Slider/Slider";
import BestSelling from "./components/Home/Best Selling/BestSelling";
import ReligiousAccessories from "./components/Home/RELIGIOUS  ACCESSORIES/ReligiousAccessories";
import DailyAccessories from "./components/Home/DAILY ACCESSORIES/DailyAccessories";
import Testimonials from "./components/Home/Testimonials/Testimonials";
import Footer from "./components/Home/Footer/Footer";

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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Slider />
                <BestSelling />
                <ReligiousAccessories />
                <DailyAccessories />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/religiousAll" element={<ReligiousAll />} />
          <Route path="/dailyAll" element={<DailyAll />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/order" element={<Order />}>
            <Route path="/order" element={<OrderHistory />} />
            <Route path="/order/acdetails" element={<AcDetails />} />
          </Route>
          <Route path="/orderDetails" element={<OrderDetails />} />


          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/admin" element={<AllAdminProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct" element={<EditProduct />} />
          <Route path="/adminOrders" element={<CustOrders />} />
          <Route path="/viewCustOrder" element={<ViewCustOrders />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
