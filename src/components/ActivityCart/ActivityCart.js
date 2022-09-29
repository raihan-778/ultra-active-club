import React from "react";
import "./ActivityCart.css";

const ActivityCart = ({ duration, breakTime, setBreakTime }) => {
  const [breakTime, setBreakTime] = useState("");
  // Break time event handler
  const handleShowBreakTime = (e) => {
    setBreakTime(e.traget.innerHTML);
    console.log(e.traget.innerText);
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
            onClick={(e) => this.handleShowBreakTime(e)}
            className="break-btn"
          >
            3d
          </button>
          <button
            onClick={(e) => this.handleShowBreakTime(e)}
            className="break-btn"
          >
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
          <h2>
            Learning Time{" "}
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
