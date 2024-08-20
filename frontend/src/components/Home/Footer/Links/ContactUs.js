import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './links.css';

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <div className="contact-box">
          <h2>Email Us</h2>
          <p>If you have any questions or need further assistance, feel free to reach out to us via email.</p>
          <a href="mailto:didwaniacreations@gmail.com" className="contact-link">Send an Email</a>
        </div>

        <div className="contact-box">
          <h2>WhatsApp Us</h2>
          <p>You can also contact us on WhatsApp or call us directly for quick responses.</p>
          <a href="https://wa.me/+918591100176" target="_blank" rel="noopener noreferrer" className="contact-link">Chat on WhatsApp</a>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
