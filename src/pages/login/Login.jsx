import React from 'react'
import './login.css'
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function Login() {

  return (
    <section className="login section__padding">
    <div className="login__container">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="button">LOGIN</button>
      <div>
        <p>Not Registered Yet? </p>
        <NavLink exact to="/signup">
        Create an account
        </NavLink>
      </div>
      <h1>OR</h1>
          <div className="login__container-icon">
          <BsFacebook color="#4E90FF"size={45} />
          <FcGoogle size={50} />
          </div>
    </div>

    <div className="login__logo">
      <img src={logo} />
    </div>
  </section>
  )
}

export default Login