import React, { useEffect, useState } from "react";
import "./TutorialSection.css";
import TutorialCard from "../components/TutorialCard";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { getTutorials } from "../services/tutorialServices";

const TutorialSection = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    let isRequestCancelled = false;
    getTutorials()
      .then((res) =>
        isRequestCancelled ? null : setTutorials(res.data.tutorials)
      )
      .catch((err) => console.log(err));
    return () => {
      isRequestCancelled = true;
    };
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
          {tutorials.map((tutorial, key) => {
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
