import React from "react";
import "./TutorialSection.css";
import TutorialCard from "../components/TutorialCard";
import Navbar from "../navbar/Navbar";
import { Tutorial } from "../Data/Tutorial.js";

const TutorialSection = () => {
  return (
    <>
      <Navbar />
      <div className="tutorial__container">
        <div className="tutorial_card_container">
          {
            Tutorial.map((tutorial, key) => {
              return (
                <TutorialCard key={key} heading={tutorial.heading} desc={tutorial.desc} link={tutorial.link} />
              );
            })
          }

        </div>
      </div>
    </>
  );
};

export default TutorialSection;
