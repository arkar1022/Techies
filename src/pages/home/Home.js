import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
import python from "../../assets/python.jpeg";
import oracle from "../../assets/oracle.png";
import founder from "../../assets/Founder.png";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Pagination} from 'swiper';

import { useSelector,useDispatch } from "react-redux";
import {increment} from "../../actions";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import stud1 from "../../assets/stud1.jpg";

function useWindowSize() {
  
  const [wsize, setWsize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWsize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return wsize;
}

function Home() {
  let navigate = useNavigate(); 
  const { ref: trainRef, inView: trainIsVisible } = useInView();
  const width = useWindowSize();

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const mySize = () => {
    if (width < 800) {
      return 1;
    } else {
      return 3;
    }
  };
 
  return (
    <>
      <section className={'header section__padding'}>
        <div className="header-content slide-down">
          <h1 className="gradient__text">Techies Training Centre</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>

          <div className="header-content__btn">
            <button type="button" onClick={()=>{navigate("/about");dispatch(increment(4))}}>Explore Courses</button>
            <button type="button" onClick={()=>navigate("/about")}>Explore Activites</button>
          </div>
        </div>

        <div className="header-image"></div>
      </section>

      <section className="course section__padding slide-up">
        <div className="course__container" onClick={()=>navigate("/course_detail")}>
          <div className="course__container-img">
            <img src={python} />
          </div>
          <div className="course__container-content">
            <p>Python Basic</p>
            <p>Tr. Techies</p>
            <p>$34.32</p>
            <a>Explore</a>
          </div>
        </div>

        <div className="course__container" onClick={()=>navigate("/course_detail")}>
          <div className="course__container-img">
            <img src={oracle} />
          </div>
          <div className="course__container-content">
            <p>Advanced Oracle</p>
            <p>Tr. Techies</p>
            <p>$32.22</p>
            <a>Explore</a>
          </div>
        </div>
      </section>

      <section className="register section__padding">
        <div className="register__container">
          <h4>23</h4>
          <p>Courses</p>
        </div>
        <div className="register__container">
          <h4>3,140</h4>
          <p>Registered</p>
        </div>
        <div className="register__container">
          <h4>200</h4>
          <p>Employed</p>
        </div>
      </section>

      <section  className="trainer section__padding">
        
          <>
            <div className="trainer__container slide-right">
              <img src={founder} />
            </div>
            <div className="trainer__container-content slide-left">
              <h3>Mr.David Jokey</h3>
              <h4>Founder & Lead Instructor</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </>

      </section>

      <section className="goal section__padding">
            <div className="goal__content">
              <h3>Our Goal</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                laborirum."
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in volup"
              </p>
              <button type="button" onClick={()=>navigate("/about")}>See More</button>
            </div>
       
      </section>

      <section className="feedback section__padding">
      <h2>Student Feedbacks</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={mySize()}
          pagination={true} 
          modules={[Pagination]} 
          className="mySwiper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="feedback__container">
              <div className="feedback__container-img">
                <img src={stud1} />
              </div>
              <div className="feedback__container-content">
                <div className="feedback__container-content-star">
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                </div>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's s{" "}
                </p>
                <div className="feedback__container-content-name">
                  <h3>Andrew Michell</h3>
                  <p>- Advanced Oracle</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feedback__container">
              <div className="feedback__container-img">
                <img src={stud1} />
              </div>
              <div className="feedback__container-content">
                <div className="feedback__container-content-star">
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                </div>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's s{" "}
                </p>
                <div className="feedback__container-content-name">
                  <h3>Andrew Michell</h3>
                  <p>- Advanced Oracle</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feedback__container">
              <div className="feedback__container-img">
                <img src={stud1} />
              </div>
              <div className="feedback__container-content">
                <div className="feedback__container-content-star">
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                </div>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's s{" "}
                </p>
                <div className="feedback__container-content-name">
                  <h3>Andrew Michell</h3>
                  <p>- Advanced Oracle</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="feedback__container">
              
              <div className="feedback__container-img">
                <img src={stud1} />
              </div>
              <div className="feedback__container-content">
                <div className="feedback__container-content-star">
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                  <AiFillStar color="#152238" size={20} />
                </div>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's s{" "}
                </p>
                <div className="feedback__container-content-name">
                  <h3>Andrew Michell</h3>
                  <p>- Advanced Oracle</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Home;
