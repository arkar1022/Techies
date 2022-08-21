import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram,BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <NavLink exact to="/">
            TECHIES
          </NavLink>
          <p>
            Techies Training Centre <br /> All Rights Reserved
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>
            <NavLink exact to="/courses">
              Courses
            </NavLink>
          </p>
          <p>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </p>
          <p>
            <NavLink exact to="/about">
              About
            </NavLink>
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>
            <AiFillPhone color="#fff" size={15} /> <a>+9595049384</a>
          </p>
          <p>
            <AiFillPhone color="#fff" size={15} /> <a>+959785437984</a>
          </p>
          <p>
            <AiOutlineMail color="#fff" size={15} />
            <a>info@techies.net</a>
          </p>
        </div>
        <div className="footer-links_follow">
          <h4>Follow Us</h4>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <BsFacebook color="#fff" size={25} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <BsTwitter color="#fff" size={25} />{" "}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <BsInstagram color="#fff" size={25} />{" "}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <BsLinkedin color="#fff" size={25} />{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="footer-terms">
        <p>
          <NavLink exact to="/">
            Terms & Conditions
          </NavLink>
        </p>
        <p>
          <NavLink exact to="/">
            Privacy Policy
          </NavLink>
        </p>
      </div>
      <div className="footer-copyright">
        <p>@2022 TECHIES. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
