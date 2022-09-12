import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {addToken, removeToken} from "../../actions";

import "./signup.css";
import { useState } from "react";
function Signup() {


  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })

  function submit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/api/register/", {
      email: data.email,
      name: data.name,
      password: data.password,
      phone: "xxxxxxxxxx"
    })
    .then(response=>{
      console.log(response.data.token)
      dispatch(addToken(response.data.token))
      navigate("/");
    })

  }

  function handle(e) {
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <>
      <section className="signup section__padding">
        <div className="signup__container">
          <input onChange={(e)=>handle(e)} id="name" type="text" value={data.name} placeholder="Your Name" />
          <input onChange={(e)=>handle(e)} id="email" type="email" value={data.email} placeholder="Email" />
          <input onChange={(e)=>handle(e)} id="password" type="password" value={data.password} placeholder="Password" />
          <input onChange={(e)=>handle(e)} type="password" placeholder="Confirm Password" />
          <button type="button" onClick={(e)=>submit(e)}>SIGN UP</button>
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
