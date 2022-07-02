import React from 'react'
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <>
        <div className="EndFooter">

<footer className="bg-dark text-center text-white">

<div className="container p-4 pb-0">
  
  <section className="mb-4">
    
    <NavLink className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
      ><i className="fa fa-facebook-official"></i></NavLink>

   
    <NavLink className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
      ><i className="fa fa-twitter-square"></i></NavLink>

    
    <NavLink className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
      ><i className="fa fa-google-plus-official"></i></NavLink>

    
    <NavLink className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
      ><i className="fa fa-instagram"></i></NavLink>

    
    <NavLink className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
      ><i className="fa fa-linkedin-square"></i></NavLink>

    
    <NavLink className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
      ><i className="fa fa-github"></i></NavLink>
  </section>
  
</div>

<div className="text-center p-3">
  © 2020 Copyright:
  <NavLink className="text-white" to="#">Spice Bazar.com</NavLink>
</div>

</footer>

</div>
    </>
  )
}

export default Footer