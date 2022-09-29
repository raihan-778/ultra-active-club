import React from "react";
import SingleSubject from "../SingleSubject/SingleSubject";
import "./Subjects.css";

const Subjects = ({ subjects, handelAddToList }) => {
  return (
    <div>
      <div className="subjects-container">
        {subjects.map((subject) => (
          <SingleSubject
            handelAddToList={handelAddToList}
            key={subject.id}
            subject={subject}
          ></SingleSubject>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
