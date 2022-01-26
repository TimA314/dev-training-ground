import React from "react";
import "./TutorialSection.css";
import TutorialCard from "../components/TutorialCard";
import Navbar from "../navbar/Navbar";

const TutorialSection = () => {
  return (
    <>
    <Navbar/>
      <div className="tutorial__container">
        <div className="tutorial_card_container">
          <TutorialCard />
          <TutorialCard />
          <TutorialCard />
          <TutorialCard />
        </div>
      </div>
    </>
  );
};

export default TutorialSection;
