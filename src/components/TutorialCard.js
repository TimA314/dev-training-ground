import React from "react";
import "./TutorialCard.css";

const TutorialCard = () => {
  return (
    <>
      <div className="card">
        <h4 className="card-title">Introduction to OOPS in C++</h4>
        <p >
          Know the basics of C++ , now looking forward to learn object oriented
          programming, to ace your interviews and college tests ? Then, this is
          the perfect track for you as we cover here OOPS from the basics to
          advanced. We have mcqs, interview questions and coding problems to
          complement your journey.
        </p>
        <a
          rel="_blank"
          class="btn"
          href="https://www.codingninjas.com/codestudio/guided-paths/basics-of-c/content/118817/offering/1381799"
          role="button"
        >
          Learn More
        </a>
      </div>
    </>
  );
};

export default TutorialCard;
