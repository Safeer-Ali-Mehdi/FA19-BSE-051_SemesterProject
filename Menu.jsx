import axios from "axios";
import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AddNewDish from "../AddNewDish";
// import biryani from "../Images/biryani.jpg";
// import mutton_Karahi from "../Images/mutton_Karahi.jpg";
// import burger from "../Images/burger.jpg";
// import pizza from "../Images/pizza.jpg";
// import Fresh_Sweets from "../Images/Fresh_Sweets.jpg";
// import sweets from "../Images/sweets.jpg";

// import { useHistory } from "react-router-dom";
import SingleDish from "./SingleDish";

const Menu = () => {

  const history = useHistory();

  const [dishes, setDishes] = React.useState([]);

  const getData = () => {
    axios
    .get("http://localhost:5000/DishList")
    .then((res) => {
      setDishes(res.data);
    })
    .catch((err) => {
      console.log(err);
      history.push('/SignIn');

    })
  }

  useEffect(()=>{
    getData();
     },[]);

  const randerNewPage = () =>{
    history.push('/AddNewDish')
  }
  
  
    
  
  return (
    <>
     <div className="orderSection">
     <button className="bg-dark btn-lg text-white" onClick={randerNewPage}>Add Dish</button>
      <h5>PLACE ORDER</h5>
      <p>We provide best delivery service across all over Pakistan</p>
     </div>
      {dishes.length == 0 ? (
        <p>There is nothing to Show</p>
      ) : (
        <div>
          {dishes.map((dish, index) => (
            <SingleDish key={index} dish={dish} />
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;

// const history = useHistory();

// const callMenuPage = async () =>{
//   try {
//      const res = await fetch("http://localhost:5000/MenuList",{
//        method:"GET",
//        headers:{
//          Accept:"application/json",
//          "Content-Type":"application/json"
//        },
//        credentials:"include"
//      });

//      const data = await res.json();
//      console.log(data);

//      if(!res.status === 200){
//        const error = new Error(res.error);
//        throw error;
//      }
//   } catch (error) {
//     console.log(error);
//     history.push('/SignIn');
//   }
// }
// useEffect(()=>{
//     callMenuPage();
// },[]);

{
  /* <div className="orderSection">
      <h5>PLACE ORDER</h5>
      <p>We provide best delivery service across all over Pakistan</p>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set m-auto">

          <div className="card bg-dark">
            <img className="card-img-top btn" src={biryani} alt=""/>
            <div className="card-body">
              <h5 className="card-title text-white">Biryani</h5>
              <p className="card-text text-white showHere">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="https://www.google.com" className="btn btn-light font-weight-bold">Order</NavLink>
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set">

          <div className="card bg-dark">
            <img className="card-img-top" src={mutton_Karahi} alt=""/>
            <div className="card-body">
              <h5 className="card-title text-white">Mutton Karahi</h5>
              <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="https://www.google.com" className="btn btn-light font-weight-bold">Order</NavLink>
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set">


          <div className="card bg-dark">
            <img className="card-img-top" src={burger} alt=""/>
            <div className="card-body">
              <h5 className="card-title text-white">Burger</h5>
              <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="https://www.google.com" className="btn btn-light font-weight-bold">Order</NavLink>
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set">

          <div className="card bg-dark">
            <img className="card-img-top" src={pizza} alt=""/>
            <div className="card-body">
              <h5 className="card-title text-white">Pizza</h5>
              <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="https://www.google.com" className="btn btn-light font-weight-bold">Order</NavLink>
            </div>
          </div>

        </div>


        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set">

          <div className="card bg-dark" >
            <img className="card-img-top" src={Fresh_Sweets} alt=""/>
            <div className="card-body">
              <h5 className="card-title text-white">Fresh Pastries</h5>
              <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="https://www.google.com" className="btn btn-light font-weight-bold">Order</NavLink>
            </div>
          </div>

        </div>


        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 set">

          <div className="card bg-dark">
            <img className="card-img-top" src={sweets} alt=""/>
            <div className="card-body">
              <h5 className="card-title text-white">Sweets</h5>
              <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="https://www.google.com" className="btn btn-light font-weight-bold">Order</NavLink>
            </div>
          </div>

        </div>

      </div>
    </div> */
}
