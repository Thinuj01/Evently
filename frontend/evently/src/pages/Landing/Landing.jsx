// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Landing.css"
import Carousel from '../../components/carousel/Carousel'

function Landing() {
  return (
    <div className='landing-container'>
      <div className="navbar-sector">
      <Navbar/>
      </div>
      <div className="landing-carousel">
      <Carousel/>
      </div>
    </div>
  )
}

export default Landing
