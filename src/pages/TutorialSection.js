import React, { useEffect, useState } from "react";
import "./TutorialSection.css";
import TutorialCard from "../components/TutorialCard";
import Navbar from "../navbar/Navbar";
import { Tutorial } from "../Data/Tutorial.js";
import { useSelector } from "react-redux";
import { getTutorials } from "../services/tutorialServices";

const TutorialSection = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    getTutorials().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`tutorial__container ${
          darkMode ? "tutorialDarkMode" : "tutorialLightMode"
        }`}
      >
        <div className="tutorial_card_container">
          {Tutorial.map((tutorial, key) => {
            return (
              <TutorialCard
                key={key}
                heading={tutorial.heading}
                desc={tutorial.desc}
                link={tutorial.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TutorialSection;
