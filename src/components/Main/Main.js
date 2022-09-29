import React, { useEffect, useState } from "react";
import ActivityCart from "../ActivityCart/ActivityCart";

import "./Main.css";
import Subjects from "../Subjects/Subjects";

const Main = () => {
  const [subjects, setSubjects] = useState([]);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    fetch(`fakeDb.json`)
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  //Add to list button  event handler
  const handelAddToList = (id) => {
    let selectedSubject = subjects.find((subject) => id === subject.id);
    let totalDuration = selectedSubject.time + duration;
    console.log(selectedSubject.time);

    console.log(duration);
    setDuration(totalDuration);
  };

  // console.log(subjects);
  return (
    <div className="main-container">
      <Subjects
        handelAddToList={handelAddToList}
        subjects={subjects}
      ></Subjects>
      <ActivityCart
        duration={duration}
        setDuration={setDuration}
      ></ActivityCart>
    </div>
  );
};

export default Main;
