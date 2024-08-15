import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import BestSelling from './Best Selling/BestSelling'
import ReligiousAccessories from './RELIGIOUS  ACCESSORIES/ReligiousAccessories'
import DailyAccessories from './DAILY ACCESSORIES/DailyAccessories'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'

function Home() {
    // const user = JSON.parse(localStorage.getItem('user'));
    // console.log('authcontext', user)
    
  return (
    <>
              <Navbar />
              {/* <Slider />
              <BestSelling /> */}
              <ReligiousAccessories />
              <DailyAccessories />
              <Testimonials />
              <Footer />
            </> 
  )
}

export default Home