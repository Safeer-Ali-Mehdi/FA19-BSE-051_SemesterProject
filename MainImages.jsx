import React from 'react'
import img1 from "../Images/image_1.jpeg";
import img2 from "../Images/image_2.jpeg";
import img3 from "../Images/image_3.jpeg";

const MainImages = () => {
  return (
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
    </>
  )
}

export default MainImages