import React, { useState, useEffect } from "react";
import "./courses.css";
import { BiSearchAlt } from "react-icons/bi";
import { CgArrowRightR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import python from "../../assets/python.jpeg";
import axios from "axios";

import { useSelector,useDispatch } from "react-redux";
import {deselectCourse, selectCourse} from "../../actions";

function Courses() {

  let navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  const course = useSelector(state => state.courseInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8000/api/courses/").then((response) => {
      setCourses(response.data);
    });
  }, []);

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
          {courses.map((course) => {
            return (
              <button type="button" onClick={() => dispatch(selectCourse(course))}>
                {course.name} <CgArrowRightR size={50} />
              </button>
            );
          })}
        </div>
        {course != null ? (
          <dir className="courses-content__container">
            <IoCloseOutline
              color="black"
              size={25}
              onClick={() => dispatch(deselectCourse())}
            />

            <div className="courses-content">
              <img src={python} />
              <div className="course__info">
                <h2>{course.name}</h2>
                <p>
                {course.description}
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/course_detail")}
                >
                  Explore
                </button>
              </div>
            </div>
          </dir>
        ) : (
          <div className="course__start"></div>
        )}
      </section>
    </>
  );
}

export default Courses;
