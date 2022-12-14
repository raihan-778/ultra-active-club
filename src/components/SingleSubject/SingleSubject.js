import React from "react";
import "./SingleSubject.css";

const SingleSubject = ({ subject, handelAddToList }) => {
  // console.log(subject);
  const { id, name, age, img, time } = subject;

  return (
    <div>
      <div className="subject-details">
        <img className="img" src={img} alt="" />

        <div className="subject-info">
          <h2>{name}</h2>
          <p> Learning Duration: {time} Days</p>
          <p>
            <small>Age limit: {age}</small>
          </p>
          <button
            onClick={() => handelAddToList(id)}
            className="add-to-list-btn"
          >
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSubject;
