import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import profile from "../../assets/profilepic.png";
import "./navbar.css";
import "animate.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login, getUser, deleteUser, logout, removeToken } from "../../actions";

function Navbar() {
  const token = useSelector((state) => state.token);
  const islogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  const [islog, setIslog] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    console.log(token)
    if (token) {
      axios
        .get("http://localhost:8000/api/user/", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
            dispatch(login());
            dispatch(getUser(response.data))
        }).catch(
          function (error) {
            if (error.response) {
              dispatch(removeToken());
              dispatch(deleteUser());
            }
          }
        );
    } else{
      dispatch(logout());
      dispatch(deleteUser());
    }
  },[token]);
  const Menu = () => (
    <>
      <p>
        <NavLink exact to="/courses" onClick={() => setToggleMenu(false)}>
          Courses
        </NavLink>
      </p>
      <p>
        <NavLink exact to="/contact" onClick={() => setToggleMenu(false)}>
          Contact
        </NavLink>
      </p>
      <p>
        <NavLink exact to="/about" onClick={() => setToggleMenu(false)}>
          About
        </NavLink>
      </p>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <NavLink exact to="/">
            TECHIES
          </NavLink>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      {islogged ? (
        <>
          <div className="navbar-profile">
            <img src={profile} alt="" onClick={() => {setProfileMenu(!profileMenu);setToggleMenu(false)}}/>
          </div>
          {profileMenu?   <div className="navbar-profile_container scale-up-center">
            <p onClick={() => {navigate("/profile"); setProfileMenu(!profileMenu)}}>Manage Account</p>
            <p onClick={() => {dispatch(removeToken()); setProfileMenu(!profileMenu); navigate("/");}}>Logout</p>
          </div> : null}
        
        </>
      ) : (
        <div className="navbar-sign">
          <button type="button" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      )}

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#152238"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#152238"
            size={27}
            onClick={() => {setToggleMenu(true); setProfileMenu(false)}}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            {islogged ? null : (
              <div className="navbar-menu_container-links-sign">
                <button type="button" onClick={() => navigate("/login")}>
                  Login
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
