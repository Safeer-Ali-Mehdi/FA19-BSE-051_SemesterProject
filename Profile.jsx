import React from 'react'

const Profile = () => {
  return (
    <>
 <section className="vh-100" style={{backgroundcolor: "dark"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black bg-dark" style={{borderradius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Profile Page</p>

                <form method="POST" className="mx-1 mx-md-4">

                  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-envelope fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label type="email" name="email" id="form3Example3c" className="form-control"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-lock fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label type="password" name="password" id="form3Example4c" className="form-control"/><label/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-key fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0 ml-10px"> 
                      <input type="password" name="cpassword" id="form3Example4cd" className="form-control"/>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-light btn-lg">Register</button>
                  </div>

                </form>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Profile