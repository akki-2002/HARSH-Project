import React,  { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../Images/logo.png';
import './Footer.css'

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the window to the top
}, []);
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Didwania Creations Logo" />
        <div className="email"><a href="mailto:didwaniacreations@gmail.com">didwaniacreations@gmail.com</a></div>
        <div className="phone"><a href="https://wa.me/918591100176?text=Hello%20Didwania%20Creations!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
            +91 8591100176
          </a></div>
        <div className="address">
        <a target="_blank" href="https://www.google.com/maps/place/Didwania+Ring+Products/@18.9535721,72.827583,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce22cfd5fa93:0x7ebe81d784a9c69b!8m2!3d18.953567!4d72.8301579!16s%2Fg%2F1pv0kf3gh?entry=ttu" rel="noopener noreferrer">
            Shop No. 21, Ground Floor, 2nd Bhoiwada, Bhuleshwar, Mumbai - 400002
          </a>
          <p className="india">INDIA</p>
        </div>
        <div className="social-icons">
          <span>
            <a target="_blank" href="https://www.facebook.com" rel="noopener noreferrer"><FaFacebookF /></a> 
            <a target="_blank" href="https://www.instagram.com/didwani.creation/?igsh=MXA0c2FreHJndm1qcw%3D%3D" rel="noopener noreferrer"><AiFillInstagram /></a>
            {/* <a target="_blank" href="https://www.linkedin.com" rel="noopener noreferrer"><FaLinkedinIn /></a> */}
            {/* <a target="_blank" href="https://www.twitter.com" rel="noopener noreferrer"><FaTwitter /></a> */}
            {/* <a target="_blank" href="https://www.youtube.com" rel="noopener noreferrer"><FaYoutube /></a> */}
          </span>
        </div>
        <div className="copyright">Copyright © DIDWANIA CREATIONS 2024</div>
      </div>
      <div className="footer-right">
        <ul>
        <Link to="/AboutUs"style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}><li style={{ cursor: 'pointer', color: 'white' }}>About Us</li></Link>  
        <Link to="/Terms&Conditions"style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}><li style={{ cursor: 'pointer', color: 'white' }}>Terms & Conditions</li></Link> 
        <Link to="/Refund&Returns"style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}><li style={{ cursor: 'pointer', color: 'white' }}>Refund & Returns</li></Link>
        <Link to="/PrivacyPolicy"style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}><li style={{ cursor: 'pointer', color: 'white' }}>Privacy Policy</li></Link>
        <Link to="/Shipping"style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}><li style={{ cursor: 'pointer', color: 'white' }}>Shipping</li></Link>
        <Link to="/ContactUs"style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}><li style={{ cursor: 'pointer', color: 'white' }}>Contact Us</li></Link>
        </ul>
        <p style={{ cursor: 'pointer', color: 'white' }}>
          Design and Development by <span className="oar"><a target="_blank" href="https://www.oar.com" rel="noopener noreferrer">OAR</a></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
