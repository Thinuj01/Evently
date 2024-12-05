/* eslint-disable no-unused-vars */
import React from 'react'
import carousalPhoto01 from "../../Images/photo.jpg"
import "./Carousel.css"

function Carousel() {
  return (
    <div className='carousel-container'>
      <img src={carousalPhoto01} alt='carouselPhoto'/>
    </div>
  )
}

export default Carousel
