import React, { useState } from "react";
import "./ActivityCart.css";

const ActivityCart = ({ duration }) => {
  const [breakTime, setBreakTime] = useState("");
  // Break time event handler
  const handleShowBreakTime = (e) => {
    console.log(e.target.innerHTML);
    setBreakTime(e.target.innerHTML);
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
          <button
            onClick={(id) => this.handleShowBreakTime(id)}
            className="break-btn"
            id="1"
          >
            3d
          </button>
          <button
            onClick={(id) => this.handleShowBreakTime(id)}
            className="break-btn"
            id="2"
          >
            7d
          </button>
          <button onClick={handleShowBreakTime} id="3" className="break-btn">
            10d
          </button>
          <button onClick={handleShowBreakTime} id="4" className="break-btn">
            15d
          </button>
        </div>
        <div className="study-duration">
          <h2>
            Learning Time
            <span className="duration-count">{duration} days</span>
          </h2>
          <h2>
            Break Time <span className="duration-count">{breakTime} days</span>
          </h2>
        </div>
        <button className="complited-btn">Activity Complited</button>
      </div>
    </div>
  );
};

export default ActivityCart;
