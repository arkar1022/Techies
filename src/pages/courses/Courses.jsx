import React, { useState } from 'react';
import "./courses.css";
import { BiSearchAlt } from "react-icons/bi";
import { CgArrowRightR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import python from "../../assets/python.jpeg";

function Courses() {
    const [isDetail,setIsDetail] = useState(false);
    let navigate = useNavigate(); 
  return (
    <>
      <section className="coursehd section__padding">
        <h1> Available Courses</h1>
        <div className="coursehd__search">
          <BiSearchAlt color="#152238" size={20} />
          <input type="text" placeholder="Search" />
        </div>
      </section>

      <section className="courses section__padding">
        <div className="courses__container">
          <button type="button" onClick={()=>setIsDetail(true)}>
            Advanced Python <CgArrowRightR size={50}  />
          </button>
          <button type="button" onClick={()=>setIsDetail(true)}>
            Advanced Python <CgArrowRightR size={50} />
          </button>
          <button type="button" onClick={()=>setIsDetail(true)}>
            Advanced Python <CgArrowRightR size={50} />
          </button>
          <button type="button" onClick={()=>setIsDetail(true)}>
            Advanced Python <CgArrowRightR size={50} />
          </button>
          <button type="button" onClick={()=>setIsDetail(true)}>
            Advanced Python <CgArrowRightR size={50} />
          </button>
        </div>
        {isDetail? 
        <dir className="courses-content__container">
        <IoCloseOutline color="black" size={25} onClick={()=>setIsDetail(false)}/>
          <div className="courses-content">
            <img src={python} />
            <dir className="course__info">
              <h2>Advanced Python</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                necessitatibus optio facere, ex at quos eveniet sequi id quo
                dolorum cupiditate porro, hic illo sapiente et odio omnis.
                Accusantium, at.
              </p>
              <button type="button" onClick={()=>navigate("/course_detail")}>Explore</button>
            </dir>
          </div>
        </dir>
        : <div className='course__start'></div>}
      
      </section>
    </>
  );
}

export default Courses;
