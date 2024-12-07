/* eslint-disable no-unused-vars */
import React from 'react'
import "./Footer.css"
import logo from "../../Images/logo white.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-logo">
        <img src={logo} alt='logo'/>
        <h1>Evently</h1>
      </div>
      <div className="footer-text">
        <p>&copy;2024 Evently. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
