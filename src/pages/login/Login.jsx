import React, { useState } from 'react'
import './login.css'
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import {addToken, removeToken} from "../../actions";

function Login() {

  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function submit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/api/login/", {
      email: data.email,
      password: data.password
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
    <section className="login section__padding">
    <div className="login__container">
      <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" placeholder="Email" />
      <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" placeholder="Password" />
      <button type="button" onClick={(e) => submit(e)}>LOGIN</button>
      <div>
        <p>Not Registered Yet? </p>
        <NavLink exact to="/signup">
        Register Now
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