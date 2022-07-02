import React , {useState} from "react";
import img from "../Images/Signup_Tittle.jpg";
const Signup = () => {
  
  const [user ,setUser] = useState({
          
    name : "" , email : "", password : "" , cpassword : "" 
});

let name,value;

const handleInputs = (e) =>{
  console.log(e);
  name = e.target.name;
  value = e.target.value;

  setUser({...user, [name]:value});
}

const postData = async (e) =>{
      e.preventDefault();

      const { name , email, password , cpassword} = user;

      const res = await fetch("http://localhost:5000/register",{
        method: "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name , email, password , cpassword
        })
      });

      const data = await res.json();

      if(res.status === 422){
        window.alert("Plesae fill the field properly");
      }
      else if(res.status === 409){
        window.alert("Already have an Account for this Email");
      }
      else if(res.status === 412){
        window.alert("Password does't match with Confirm Password");
      }
      else if(res.status === 201){
        window.alert("Registeration Successfull!");
      }
      else{
        window.alert("Invalid Registeration!");
      }    
} 
  
  return(
  
      <>
  <section className="vh-100" style={{backgroundcolor: "dark"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black bg-dark" style={{borderradius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Sign up</p>

                <form method="POST" className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-user fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="name" id="form3Example1c" className="form-control" 
                        value={user.name}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-envelope fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="email" id="form3Example3c" className="form-control"
                      value={user.email}
                      onChange={handleInputs}
                       />

                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-lock fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name="password" id="form3Example4c" className="form-control" 
                        value={user.password}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-key fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0 ml-10px"> 
                      <input type="password" name="cpassword" id="form3Example4cd" className="form-control" 
                        value={user.cpassword}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-light btn-lg"
                    onClick={postData}>Register</button>
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

export default Signup