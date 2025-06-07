import React from "react";
import "./about.css";
import Goal from "../../assets/goal.jpg";
import About from "../../assets/robot.jpg";

export default function about() {
  const cards = [
    {
      image: "/images/members/team_photo_2024.jpg",
      title: "OUR MISSION",
      description:
        "UBC Subbots is a student team building autonomous underwater vehicles (AUVs) for the annual RoboSub competition in San Diego.",
    },
    {
      image: About,
      title: "WHAT WE DO",
      description:
        "We design and build systems for navigation, waterproofing, hydrodynamics, and mechanical actuation—combining skills from engineering and computer science.",
    },
    {
      image: Goal,
      title: "OUR GOALS",
      description:
        "We build from scratch to deepen learning, improve every year, and prepare students for real-world careers in robotics and engineering.",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-container">
          <div className="gap">
            {/* <span className="about-title1">WHO</span> */}
            <span className="about-title">WHO WE ARE?</span>
          </div>
          <span className="about-subtitle">
            UBC Subbots is a student-led team that designs and builds autonomous
            underwater vehicles (AUVs) for the annual RoboSub competition in San
            Diego. We develop systems for navigation, waterproofing,
            hydrodynamics, and mechanical actuation, integrating expertise from
            engineering and computer science. By building everything from
            scratch, we aim to deepen our learning, improve year over year, and
            equip students with real-world experience in robotics and
            engineering.
          </span>
        </div>
      </div>
    </div>
  );
}
