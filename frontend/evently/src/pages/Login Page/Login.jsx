/* eslint-disable no-unused-vars */
import React from 'react'
import "./Login.css"
import WelcomeQuotes from '../../components/Welcome Quotes/WelcomeQuotes'
import LoginForm from '../../components/Login Form/LoginForm'

function Login() {
    
  return (
    <div className='login-container'>
      <div className="login-quotes" >
        <WelcomeQuotes text="Welcome Back !"/>
      </div>
      <div className="login-form">
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login
