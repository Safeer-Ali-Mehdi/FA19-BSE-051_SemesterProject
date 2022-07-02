import { Button } from "bootstrap";
import React from "react";
import img1 from "../Images/image_1.jpeg";
import img2 from "../Images/image_2.jpeg";
import img3 from "../Images/image_3.jpeg";

import Kitchen_1 from "../Images/Kitchen_1.jpg";
import Kitchen_2 from "../Images/Kitchen_2.jpg";
import Kitchen_3 from "../Images/Kitchen_3.jpg";
import Kitchen_4 from "../Images/Kitchen_4.jpg";
import Kitchen_5 from "../Images/Kitchen_5.jpg";
import Kitchen_6 from "../Images/Kitchen_6.jpg";
const Home = () => {
  return(
      <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} alt="First slide"/>
          <div className="carousel-caption justify-content-center">
            <h5>Spice Bazar</h5>
            <p>We are best food service provider across all over Pakistan</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="Second slide"/>
          <div className="carousel-caption justify-content-center">
            <h5>Spice Bazar</h5>
            <p>We are best food service provider across all over Pakistan</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img3} alt="Third slide"/>
          <div className="carousel-caption justify-content-center">
            <h5>Spice Bazar</h5>
            <p>We are best food service provider across all over Pakistan</p>
          </div>
        </div>
      </div>
    </div>

    <div className="orderSection">
      <h5>ABOUT US</h5>
      <p>&quot;Spice Bazaar, a Pakistani dining experience by the group of Yum and English Tea House. Designed by the renowned hospitality consultant, Safeer Ali Mehdi, Spice Bazaar is a celebration of Pakistani cuisine, comfortable ambiance, five star service and much needed, diversified, quality, Pakistani food.&quot;</p>
    </div>


    <div className="container">
      <div className="row">
 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">
  <img className="card-img-top btn" src={Kitchen_1} alt=""/>
</div>
<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">
  <img className="card-img-top btn" src={Kitchen_2} alt=""/>
</div>
<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">
  <img className="card-img-top btn" src={Kitchen_3} alt=""/>
</div>
<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">
  <img className="card-img-top btn" src={Kitchen_4} alt=""/>
</div>
<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">
  <img className="card-img-top btn" src={Kitchen_5} alt=""/>
</div>
<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">
  <img className="card-img-top btn" src={Kitchen_6} alt=""/>
</div>
</div>
</div>

   {/* Contact Page  */}

  
    <div className="orderSection">
      <h5>ANY QUERY?</h5>
      <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
    </div>
    <div className="container">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="name" className="setLabel">Your name : </label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="email" className="setLabel">Your email :</label>
                        <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                        <label for="subject" className="setLabel">Subject :</label>
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        </div>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form">
                        <label for="message" className="setLabel">Your message :</label>
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>
                    </div>
                </div>

            </form>

            <div class="text-center">
            <button type="button" class="btn btn-dark btn-lg">Send</button>
            </div>
          

</div>



      </>      
  )
}

export default Home