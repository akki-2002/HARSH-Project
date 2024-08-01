import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../Images/logo.png';
import './Footer.css'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Love Port Logo" />
        <div className="email"><a href="mailto: loveport2011@gmail.com">didwaniacreations@gmail.com</a></div>
        <div className="phone">+91 9136822394</div>
        <div className="address">
          <a target="_blank" href="
          ">NAVI MUMBAI, MAHARASHTRA</a>
          <p className="india">INDIA</p>
        </div>
        <div className="social-icons">
          <span>
            <a target="_blank" href=""><FaFacebookF /></a> 
            <a target="_blank" href=""><AiFillInstagram /></a>
           <a target="_blank" href=""><FaLinkedinIn /></a>
           <a target="_blank" href=""><FaTwitter /></a>
           <a target="_blank" href=""><FaYoutube /></a>
          </span>
        </div>
        <div className="copyright">Copyright © DIDWANIA CREATIONS 2024</div>
      </div>
      <div className="footer-right">
        <ul>
      <li >About Us</li>
          <li>Terms & Conditions</li>
          <li>Refund & Returns</li>
          <li>Privacy Policy</li>
          <li>Shipping</li>
          <li><a href="">Contact Us</a></li>
        </ul>
        <p>
          Design and Development by <span className="oar"><a target="_blank" href="">OAR</a></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
