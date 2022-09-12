import React from "react";
import "./course_detail.css";
import python from "../../assets/python.jpeg";
import computer from "../../assets/computer.png";
import instructor from "../../assets/instructor1.png";
import { useSelector} from "react-redux";
function Course_detail() {
  const course = useSelector(state => state.courseInfo);
  return (
    <>
      <section className="detailhd section__padding">
        <div className="detailhd-image">
          <img src={python} />
        </div>
        <div className="detailhd-content slide-down">
          <h1>{course.name}</h1>
          <p>
            {course.description}
            {/* Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of. */}
          </p>
        </div>
      </section>

      <section className="outline section__padding">
        <h1>Course Outline</h1>
        <p>
          {course.outline}
          {/* <ul>
            <li>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </li>
            <li>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </li>
            <li>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </li>
            <li>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </li>
          </ul> */}
        </p>
      </section>

      <section className="section__padding outcome ">
        <div className="outcome-content">
          <h1>Course Outcome</h1>
          <p>
            {course.outcomes}
            {/* <ul>
              <li>Contrary to popular belief, Lorem Ipsum Contrary to popular belief, Lorem Ipsum .</li>
              <li>Contrary to popular belief, Lorem Ipsum Contrary to popular belief, Lorem Ipsum .</li>
              <li>Contrary to popular belief, Lorem Ipsum Contrary to popular belief, Lorem Ipsum .</li>
              <li>Contrary to popular belief, Lorem Ipsum Contrary to popular belief, Lorem Ipsum .</li>
            </ul> */}
          </p>
        </div>
      </section>

      <section className="teach section__padding ">
        <h1>Who gonna teach?</h1>
        <div className="teach__container">
          <div className="teach-image">
            <img src={instructor} />
          </div>
          <div className="teach-content">
            <h2>Mr. Adrew John</h2>
            <p>
              By the end of this course, you should be able to: Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Numquam, expedita.
              Quos officia dolores incidunt vitae vel accusantium, iure quis
              modi reiciendis pariatur natus in error corrupti ullam possimus
              veniam. Fuga.
            </p>
          </div>
        </div>
      </section>

      <section className="schedule section__padding ">
        <h1>Class Schedule</h1>
        <div className="schedule__container">
          <p>
            Mon 01 Aug 2022
            <br />
            2:45pm - 5:15pm{" "}
          </p>
          <p>2 months</p>
          <p>John Luthar</p>
          <p>$34.00</p>
          <button>
            <span>Enroll</span>
            <span> Now</span>
          </button>
        </div>
        <div className="schedule__container">
          <p>
            Mon 01 Aug 2022
            <br />
            2:45pm - 5:15pm{" "}
          </p>
          <p>2 months</p>
          <p>John Luthar</p>
          <p>$34.00</p>
          <button>
            <span>Enroll</span>
            <span> Now</span>
          </button>
        </div>
        <div className="schedule__container">
          <p>
            Mon 01 Aug 2022
            <br />
            2:45pm - 5:15pm{" "}
          </p>
          <p>2 months</p>
          <p>John Luthar</p>
          <p>$34.00</p>
          <button>
            <span>Enroll</span>
            <span> Now</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Course_detail;
