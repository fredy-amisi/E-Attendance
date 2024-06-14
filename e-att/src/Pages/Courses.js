import React from "react";
import "../Css/Styling.css";
import Scrollbutton from "../Components/Scrollbutton";

const Courses = () => {
  return (
    <div>
      <div className="courses-page">
        <div className="courses-vertical"></div>
        <h1>MOST POPULAR<span> ONLINE</span> <br/>BEST IN <span>COURSES</span></h1>
        <div className="course-container">
          <div className="courses">
            <h3>PYTHON</h3>
          </div>
          <div className="courses">
            <h3>JAVA</h3>
          </div>
          <div className="courses">
            <h3>NETWORKING</h3>
          </div>
          <div className="courses">
            <h3>DESIGN</h3>
          </div>
          <div className="courses">
            <h3>HTML5/CSS3</h3>
          </div>
          <div className="courses">
            <h3>PHOTOGRAPHY</h3>
          </div>
          <div className="courses">
            <h3>SOFTWARE ENGINEERING</h3>
          </div>
          <div className="courses">
            <h3>CYBER SECURITY</h3>
          </div>
          <div className="courses">
            <h3>MOBILE PROGRAMMING</h3>
          </div>
        </div>
      </div>
      <Scrollbutton/>
    </div>
  );
};

export default Courses;
