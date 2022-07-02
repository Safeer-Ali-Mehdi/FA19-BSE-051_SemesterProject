import React, {useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";
import axios from 'axios';


const SignIn = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


// axios
//   .post("http://localhost:5000/signin")
//   .then((res) => {
//                   console.log(res.data);
//                   localStorage.setItem("jwt_access_token", res.data);
//                 })
//                 .catch((e) => {
//                   console.log(e);
//                 });



const LoginUser = async (e) =>{
  e.preventDefault();

  const res = await fetch("http://localhost:5000/signin",{
        method: "POST",
        headers :{
          "Content-Type" : "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
           email, password
        })
      }).then((res) => {
      console.log(res);
      localStorage.setItem('token',res.body);

      if(res.status === 422){
        window.alert("Plesae fill the field properly");
      }
      if(res.status === 400){
        window.alert("Plesae Enter the Valid Credentials");
      }
      else  if(res.status === 202){
        window.alert("Login Successfull!");
        history.push('/Profile');
      }
     })

      // const data = await res;
      // console.log(res.status)

      
      
      // console.log(data);
}

  return (
    <>
    

  <div className="container setSignIn">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white mt-20px" style={{borderradius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2">Sign In</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <form className="mx-1 mx-md-4">

              <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-envelope fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="email" id="form3Example3c" className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                    </div>
                  </div>

              <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-lock fa-lg me-3 fa-fw text-white"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name="password" id="form3Example4c" className="form-control" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

              <p className="small mb-5 pb-lg-2"><NavLink className="text-white-50" to="#!">Forgot password?</NavLink></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit"
               onClick={LoginUser}>Login</button>

              {/* //   (e) => {
              //   // UserService
              //   // .login(email,password)
              //   // .then((data) => {
              //   //   console.log(data);
              //   // }).catch((err) => {
              //   //   console.log(err);
              //   // })
              // }  */}
            
              </form>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <NavLink to="#!" className="text-white-50 fw-bold text-decoration-underline">Sign Up</NavLink>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


    </>
  )
}


export default SignIn;