/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"
import LogoBlue from "../../Images/logo Blue.png"

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleSignInBtnClick = () =>{
      navigate("/login");
    }
  return (
    <div className={`navbar-container ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo-container">
        <img src={LogoBlue} alt='Logo'/>
        <h1>Evently</h1>
      </div>
      <div className="navbar-signin" onClick={handleSignInBtnClick}>
        Sign in
      </div>
    </div>
  )
}

export default Navbar
