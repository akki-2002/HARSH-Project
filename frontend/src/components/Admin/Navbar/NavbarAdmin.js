import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import search from "../../Images/iconamoon_search-light.png";
import userProfImg from "../../Images/Group 46.png";
import logoImg from "../../Images/logo.png";
import "./NavbarAdmin.css";

function NavbarAdmin() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="navMain1">
      <Link to={"/"}>
        <img src={logoImg} className="logo1" alt="" />
      </Link>
      <div className="navComps1">
        <div className="navLinks1">
          <Link to={"/admin"}>PRODUCTS</Link>
          <Link to={"/adminOrders"}>ORDERS</Link>
        </div>
        <div className="navIcons1">
          <div className="smallSearchBar1">
            <input type="text" placeholder="Search" />
            <img src={search} alt="search" />
          </div>
          <Link to={"/profile"}>
            <img src={userProfImg} className="icon1" alt="userProfImg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
