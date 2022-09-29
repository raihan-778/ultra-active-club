import React, { useEffect, useState } from "react";
import "./ActivityCart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ActivityCart = ({ duration }) => {
  const [breakTime, setBreakTime] = useState("");

  // Break time event handler
  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem("breakTime"));
    if (getFromLocal) {
      setBreakTime(getFromLocal);
    }
  }, []);

  const handleShowBreakTime = (e) => {
    console.log(typeof e.target.innerHTML);
    setBreakTime(e.target.innerHTML);
    localStorage.setItem("breakTime", JSON.stringify(breakTime));
  };

  //Toast animations

  const showToastMessage = () => {
    toast.success("Welldone! You have Completed all tasks!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <div className="activity-description">
        <div className="info">
          <h2>Md Raihan Uddin</h2>
          <h4>Address: CDA R/A. Colonel Hat, Chittagong</h4>
          <div className="personal-info">
            <div className="physical-info">
              <small>Age</small>
              <p>36Years</p>
            </div>
            <div className="physical-info">
              <small>Height</small>
              <p>5.5"</p>
            </div>
            <div className="physical-info">
              <small>Weight</small>
              <p>69 kg</p>
            </div>
          </div>
        </div>
        <div className="break-info">
          <h3>Break Time</h3>
          <button onClick={handleShowBreakTime} className="break-btn">
            3d
          </button>
          <button onClick={handleShowBreakTime} className="break-btn">
            7d
          </button>
          <button onClick={handleShowBreakTime} className="break-btn">
            10d
          </button>
          <button onClick={handleShowBreakTime} className="break-btn">
            15d
          </button>
        </div>
        <div className="study-duration">
          <h2>My Learning Details</h2>
          <h2>
            Learning Time
            <span className="duration-count">{duration} days</span>
          </h2>
          <h2>
            Break Time <span className="duration-count">{breakTime}</span>
          </h2>
        </div>
        <button onClick={showToastMessage} className="complited-btn">
          Activity Complited
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ActivityCart;
