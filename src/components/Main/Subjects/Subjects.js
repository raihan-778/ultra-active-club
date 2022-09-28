import React from "react";
import SingleSubject from "../../SingleSubject/SingleSubject";
import "./Subjects.css";

const Subjects = ({ subjects }) => {
  return (
    <div>
      <div className="subjects-container">
        {subjects.map((subject) => (
          <SingleSubject key={subject.id} subject={subject}></SingleSubject>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
