import React, { useEffect, useState } from "react";
import ActivityCart from "../ActivityCart/ActivityCart";

import "./Main.css";
import Subjects from "../Subjects/Subjects";

const Main = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch(`fakeDb.json`)
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);
  // console.log(subjects);
  return (
    <div className="main-container">
      <Subjects subjects={subjects}></Subjects>
      <ActivityCart></ActivityCart>
    </div>
  );
};

export default Main;
