import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


import "./signup.css";
function Signup() {
  return (
    <>
      <section className="signup section__padding">
        <div className="signup__container">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="button">SIGN UP</button>
          <div>
            <p>Already Have an Account? </p>
            <NavLink exact to="/login">
              Login Here
            </NavLink>
          </div>
          <h1>OR</h1>
          <div className="signup__container-icon">
          <BsFacebook color="#4E90FF"size={45} />
          <FcGoogle size={50} />
          </div>
        </div>

        <div className="signup__logo">
          <img src={logo} />
        </div>
      </section>
    </>
  );
}

export default Signup;
