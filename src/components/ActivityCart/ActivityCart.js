import React, { useEffect, useState } from "react";
import "./ActivityCart.css";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";

// CommonJS

const ActivityCart = ({ duration }) => {
  const [breakTime, setBreakTime] = useState("");

  useEffect(() => {
    const storedData = findBreakTime();
    console.log(storedData);
  }, [breakTime]);
  // Break time event handler

  const handleShowBreakTime = (e) => {
    console.log(e.target.innerHTML);
    localStorage.setItem("breakTime", e.target.innerHTML);
    setBreakTime(e.target.innerHTML);
  };

  const findBreakTime = () => {
    let getStoredBreakTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem("breakTimer");
    if (storedTime) {
      getStoredBreakTime = JSON.parse(storedTime);
    }
    return getStoredBreakTime;
  };

  //Toast animations
  const handelToast = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Welldone! You have completed the task",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div className="activity-description">
        <div className="personal-info">
          <h2>Md Raihan Uddin</h2>
          <h4>Address: CDA R/A. Colonel Hat, Chittagong</h4>
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
        <button onClick={handelToast} className="complited-btn">
          Activity Complited
        </button>
      </div>
    </div>
  );
};

export default ActivityCart;
