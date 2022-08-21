import React from "react";
import "./about.css";
import { useInView } from "react-intersection-observer";

import staff from "../../assets/staff.jpg";
import instructor1 from "../../assets/instructor1.png";
import instructor2 from "../../assets/instructor2.png";
import act1 from "../../assets/act1.jpg";
import act2 from "../../assets/act2.jpg";
import act3 from "../../assets/act3.jpg";
import act4 from "../../assets/act4.jpg";

function About() {
  const { ref: actRef, inView: actIsVisible } = useInView();
  return (
    <>
      <section className="abouthd section__padding">
        <div className="abouthd__location slide-down">
          <h3>Location</h3>
          <p>
            Lanmadaw - No.85/87, 15th Street,
            <br />
            Lanmadaw Township, Yangon.
          </p>
          <p>
            Htee Tan - No.17, 1st floor, Htee Tan
            <br />
            5th Street,
            <br />
            Kyee Myindaing Township,
          </p>
        </div>
        <div className="abouthd__contact slide-down">
          <h3>Contact</h3>
          <p>09785473948</p>
          <p>09785473948</p>
          <p>samplemail@gmail.com</p>
        </div>
      </section>

      <section className="about section__padding">
        <div className="about__container slide-right">
          <img src={staff} />
        </div>
        <div className="about__container-content slide-left">
          <h3>Who Are We?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
      </section>

      <section className="activities section__padding">
        <h3>Activities</h3>

        <div className="activities__container fade-in ">
          <div>
            <img src={act1} />
          </div>
          <div>
            <img src={act2} />
          </div>
          <div>
            <img src={act3} />
          </div>
          <div>
            <img src={act4} />
          </div>
        </div>
      </section>

      <section className="instruct section__padding">
        <h3>Instructors</h3>
        <div className="instruct__container">
          <div className="instruct__container-img">
            <img src={instructor1} />
          </div>
          <div className="instruct__container-content">
            <h4>Mr.John See</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </p>
          </div>
        </div>
        <div className="instruct__container">
          <div className="instruct__container-content align-right">
            <h4>Mr. Willian Saw</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </p>
          </div>
          <div className="instruct__container-img">
            <img src={instructor2} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
