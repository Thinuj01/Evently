/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Landing.css"
import Carousel from '../../components/carousel/Carousel'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import AboutUS from "../../Images/about-us.jpg"
import Footer from '../../components/Footer/Footer'

function Landing() {
  return (
    <div className='landing-container'>
      <div className="navbar-sector">
      <Navbar/>
      </div>
      <div className="landing-carousel">
      <Carousel/>
      </div>
      <div className="features-section">
        <h2>Features You get</h2>
        <div className="features-card-section">
          <FeatureCard color="Blue" title="Budget Management"/>
          <FeatureCard color="White" title="Guest Management"/>
          <FeatureCard color="Blue" title="Task & Vendor Management"/>
          <FeatureCard color="White" title="Agenda Management"/>
        </div>
      </div>
      <div className="landing-aboutus">
        <div className="aboutus-Text">
          <h2>About Us</h2>
          <p>At Evently you can turn your special moments into unforgettable experiences. 
            From weddings to corporate events, you can bring your vision to life with flawless 
            execution and attention to detail. Let us make your dream event a reality!</p>
        </div>
        <img src={AboutUS} alt='aboutus'/>
      </div>
      <div className="footer-section">
        <Footer/>
      </div>
    </div>
  )
}

export default Landing
