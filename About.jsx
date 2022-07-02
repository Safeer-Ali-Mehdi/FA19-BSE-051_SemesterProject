import React from 'react'
import biryani from "../Images/biryani.jpg";

const About = () => {
  return (
    <>
        <div className="orderSection">
      <h5>ABOUT US</h5>
      <p>We provide best delivery service across all over Pakistan</p>
    </div>


    <div className="container">
      <div className="row">
 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">

  <img className="card-img-top btn" src={biryani} alt=""/>
  


</div>
</div>
</div>
    </>
  )
}

export default About