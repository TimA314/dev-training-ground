import React from "react";
import "./TutorialCard.css";
import { Bounce } from "react-awesome-reveal";

const TutorialCard = (props) => {
  return (
    <>
      <Bounce triggerOnce="true">
        <div className="card">
          <h4 className="card-title">{props.heading}</h4>
          <p >
            {props.desc}
          </p>
          <a
            rel="_blank"
            className="btn"
            href={props.link}
            role="button"
          >
            Learn More
          </a>
        </div>
      </Bounce>
    </>
  );
};

export default TutorialCard;
