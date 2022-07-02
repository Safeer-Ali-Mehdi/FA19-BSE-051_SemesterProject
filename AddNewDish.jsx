import React from 'react'
import {useHistory} from "react-router-dom";
import axios from 'axios'

const AddNewDish = () => {

  const history = useHistory();
  const [name ,setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);

  const AddDish = (e) =>{
    axios
    .post("http://localhost:5000/AddDish",{name,description,price})
    .then((res) =>{
           console.log(res.data);
           if(res.status === 422){
            window.alert("Plesae fill the field properly");
          }
          else if(res.status === 409){
            window.alert("Already this dish is Added");
          }
          else if(res.status === 201){
            window.alert("Dish Added Successfull!");
            history.push("/Menu");
          }
          else{
            window.alert("Something Went Wrong!");
          }    
          
    })
    .catch((err) =>{
        console.log(err);
    })

  }

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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Add New Dish</p>

                <form method="POST" className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                  <label className='text-white'>Dish Name :  &nbsp;</label>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="name" id="form3Example1c" className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <label className='text-white'>Description :  &nbsp;</label>
                    <div className="form-outline flex-fill mb-0">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"
                     value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <label className='text-white'>Price :  &nbsp;</label>
                    <div className="form-outline flex-fill mb-0">
                      <input type="Number" name="price" id="form3Example4c" className="form-control"
                         value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-light btn-lg"
                    onClick={AddDish}>Add</button>
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

export default AddNewDish