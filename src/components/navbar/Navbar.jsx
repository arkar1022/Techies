import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import './navbar.css';
import 'animate.css';

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    let navigate = useNavigate(); 

    const Menu = () => (
      <>
        <p>
          <NavLink exact to = "/courses" onClick={() => setToggleMenu(false)}>Courses</NavLink>
        </p>
        <p>
          <NavLink exact to = "/contact" onClick={() => setToggleMenu(false)}>Contact</NavLink>
        </p>
        <p>
          <NavLink exact to = "/about" onClick={() => setToggleMenu(false)}>About</NavLink>
        </p>
      </>
    );
    
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <NavLink exact to ="/">TECHIES</NavLink>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button" onClick={()=>navigate("/login")}>Login</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#152238"  size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#152238" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <Menu />
          </div>
          <div className="navbar-menu_container-links-sign">
            <button type="button" onClick={()=>navigate("/login")}>Login</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;