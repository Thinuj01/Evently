/* eslint-disable no-unused-vars */
import React from 'react'
import "./Register.css"
import WelcomeQuotes from '../../components/Welcome Quotes/WelcomeQuotes'
import RegisterForm from '../../components/Register Form/RegisterForm'

function Register() {
  return (
    <div className='register-container'>
      <div className="register-quotes">
        <WelcomeQuotes text="Sign up to make your events extraordinary!"/>
      </div>
      <div className="register-form">
        <RegisterForm/>
      </div>
    </div>
  )
}

export default Register
