import React from 'react'
import Navbar from '../../Navbar/Navbar'
import About from "../../../Images/About.jpg"
import "./links.css"

function Aboutus() {
  return (
    <>
    <Navbar/>
    <div className="aboutus-container">
        <img src={About} alt="About Us" className="aboutus-image" />
      </div>
    </>
  )
}

export default Aboutus