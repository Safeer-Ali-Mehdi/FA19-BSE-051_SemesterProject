import React from "react";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Dishes/Menu";
import Contact from "./Component/Profile";
import SignIn from "./Component/SignIn";
import Signup from "./Component/Signup";
import ErrorPage from "./Component/ErrorPage";
import Footer from "./Component/Footer";
import Profile from "./Component/Profile";
// import mainImages from './Component/MainImages'

import cssFile from "./App.css";
import AddNewDish from "./Component/AddNewDish";
import VerifyAdmin from "./Component/AdminPanel/VerifyAdmin";
import AdminOperation from "./Component/AdminPanel/AdminOperation";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch> 
        {/* here exact key word means that exact that page will render.
        if we remove "exact" than on every random url i.e localhost:3000/gkdhld home pge will load   */}
          
          <Route path="/Menu" component={Menu} />

          <Route path="/Profile" component={Profile} />

          <Route path="/SignIn" component={SignIn} />

          <Route path="/ErrorPage" component={ErrorPage}/>

          <Route path="/Signup" component={Signup} />

          <Route path="/AddNewDish" component={AddNewDish} />

          <Route path="/AdminPanel"  component={VerifyAdmin} />

          <Route path="/AdminOperation" component={AdminOperation} />

          <Route path="/" exact component={Home} />

          <Redirect to="/ErrorPage"/>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
