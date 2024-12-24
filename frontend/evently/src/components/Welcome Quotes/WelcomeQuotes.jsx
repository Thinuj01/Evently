/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../../Images/logo Blue.png"
import "./WelcomeQuotes.css"

function WelcomeQuotes({text}) {
    const navigate = useNavigate();

    const handleLogoClick= ()=>{
        navigate("/");
    }
  return (
    <div className='WelcomeQuotes-container'>
      <div className="logo-section" onClick={handleLogoClick}>
        <img src={Logo} alt='Logo' />
        <h1>Evently</h1>
      </div>
      <div className="welcome-quote">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default WelcomeQuotes
