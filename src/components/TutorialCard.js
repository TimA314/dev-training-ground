import React from "react";
import "./TutorialCard.css";
import { Bounce } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const TutorialCard = (props) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <>
      <Bounce triggerOnce="true">
        <div className={`card ${darkMode ? "darkModeCard" : "lightModeCard"}`}>
          <h4 className="card-title">{props.heading}</h4>
          <p>{props.desc}</p>
          <a rel="_blank" className="btn" href={props.link} role="button">
            Learn More
          </a>
        </div>
      </Bounce>
    </>
  );
};

export default TutorialCard;
