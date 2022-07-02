import React from 'react'
import {NavLink} from "react-router-dom";
// import biryani from "../Images/biryani.jpg";

const SingleDish = ({dish}) => {
  return (
    <>

    <div className="container align-content-center">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set mt-20 ml-50">

          <div className="card bg-dark">
            {/* <img className="card-img-top btn" src={biryani} alt=""/> */}
            <div className="card-body">
              <h5 className="card-title text-white">{dish.name}</h5>
              <p className="card-text text-white showHere">{dish.description}</p>
              <p className="card-text text-white showHere">{dish.price}</p>
              <NavLink to="https://www.google.com" className="btn btn-light font-weight-bold">Order</NavLink>
            </div>
          </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default SingleDish