import React, { useEffect, useState } from "react";
import "./profile.css";
import profile from "../../assets/profile.jpeg";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getUser, deleteUser} from "../../actions";

function Profile() {
  const [editable, setEditable] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo);
  const token = useSelector((state) => state.token);


  const [data, setData] = useState({
    email: user.email,
    phone: user.phone
  })

  function submit(e) {
    if(editable) {
    e.preventDefault();
    axios.post("http://localhost:8000/api/user", {
      email: data.email,
      phone: data.phone,
    }, {
      headers: {
        'Authorization': token
      }
    })
    .then(response=>{
      console.log(response.data.token)
      dispatch(getUser(response.data))
    })}

  }

  function handle(e) {
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <>
      <section className="profile section__padding">
        <div className="profile-image">
          <img src={profile} />
        </div>
      </section>

      <section className="info section__padding">
        <div className="info__container">
          <h2>Profile</h2>
          <input
          
            type="text"
            placeholder="Name"
            defaultValue={user.id}
            disabled={!editable}
          />
          <input
        
            type="text"
            placeholder="Email"
            defaultValue={data.email}
            disabled={!editable}
          />
          <input
            type="password"
            placeholder="Password"
            defaultValue="nopassword"
            disabled={!editable}
          />
          <input
            type="text"
            placeholder="Phone Number"
            defaultValue={data.phone}
            disabled={!editable}
          />

          <button
            type="button"
            onClick={(e) => {setEditable(!editable);submit(e)}}
          >
            {editable ? <span>Save</span> : <span>Edit</span>}Info
          </button>
        </div>
      </section>

      <section className="enroll section__padding">
        <div className="enroll__title">
          <p>Course</p>
          <p>Trainer</p>
          <p>Status</p>
        </div>
        <div className="enroll__container">
          <div
            className="enroll__table"
            onClick={() => setIsActive1(!isActive1)}
          >
            <p>Advanced Python</p>
            <p>Mr. Willaim Kyaw</p>
            <p>
              Completed
              {isActive1 ? (
                <IoIosArrowDown color="#fff" size={20} />
              ) : (
                <IoIosArrowForward color="#fff" size={20} />
              )}
            </p>
          </div>
          {isActive1 && (
            <div className="enroll-content slide-down">
              <div>
                <p>
                  Starting Date - <span>Mon 01 Aug 2022</span>
                </p>
                <p>
                  Time - <span>2:45pm - 5:15pm</span>
                </p>
                <p>
                  Duration - <span>2 months</span>
                </p>
              </div>
              <div>
                <p>
                  Enrollment Date - <span>Mon 26 July 2022</span>
                </p>
                <p>
                  Tution Fee - <span>$34.43</span>
                </p>
                <p>
                  Completed Date - <span>Unavailable</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="enroll__container">
          <div
            className="enroll__table"
            onClick={() => setIsActive2(!isActive2)}
          >
            <p>Advanced Python</p>
            <p>Mr. Willaim Kyaw</p>
            <p>
              Completed{" "}
              {isActive2 ? (
                <IoIosArrowDown color="#fff" size={20} />
              ) : (
                <IoIosArrowForward color="#fff" size={20} />
              )}
            </p>
          </div>
          {isActive2 && (
            <div className="enroll-content slide-down">
              <div>
                <p>
                  Starting Date - <span>Mon 01 Aug 2022</span>
                </p>
                <p>
                  Time - <span>2:45pm - 5:15pm</span>
                </p>
                <p>
                  Duration - <span>2 months</span>
                </p>
              </div>
              <div>
                <p>
                  Enrollment Date - <span>Mon 26 July 2022</span>
                </p>
                <p>
                  Tution Fee - <span>$34.43</span>
                </p>
                <p>
                  Completed Date - <span>Unavailable</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="enroll__container">
          <div
            className="enroll__table"
            onClick={() => setIsActive3(!isActive3)}
          >
            <p>Advanced Python</p>
            <p>Mr. Willaim Kyaw</p>
            <p>
              Completed{" "}
              {isActive3 ? (
                <IoIosArrowDown color="#fff" size={20} />
              ) : (
                <IoIosArrowForward color="#fff" size={20} />
              )}
            </p>
          </div>
          {isActive3 && (
            <div className="enroll-content slide-down">
              <div>
                <p>
                  Starting Date - <span>Mon 01 Aug 2022</span>
                </p>
                <p>
                  Time - <span>2:45pm - 5:15pm</span>
                </p>
                <p>
                  Duration - <span>2 months</span>
                </p>
              </div>
              <div>
                <p>
                  Enrollment Date - <span>Mon 26 July 2022</span>
                </p>
                <p>
                  Tution Fee - <span>$34.43</span>
                </p>
                <p>
                  Completed Date - <span>Unavailable</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>Hello</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">Your right</div>}
      </div> */}
    </>
  );
}

export default Profile;
