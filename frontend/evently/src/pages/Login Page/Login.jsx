/* eslint-disable no-unused-vars */
import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import WelcomeQuotes from '../../components/Welcome Quotes/WelcomeQuotes'
import LoginForm from '../../components/Login Form/LoginForm'

function Login() {
    const navigate = useNavigate();

    const handleLogoClick= ()=>{
        navigate("/");
    }
  return (
    <div className='login-container'>
      <div className="login-quotes" onClick={handleLogoClick}>
        <WelcomeQuotes text="Welcome Back !"/>
      </div>
      <div className="login-form">
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login
