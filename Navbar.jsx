import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../Images/main_logo.png";

const Navbar = () => {
  return(
    <>
    
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  
  
    <img className="logoset" src={logo} alt='Error in loading logo'/>
    <p className="justify-content-center brand">Spice Bazar</p>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link text-white move" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/Menu">Menu</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/Profile">Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/SignIn">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/Signup">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>

 </>
  )
}

export default Navbar