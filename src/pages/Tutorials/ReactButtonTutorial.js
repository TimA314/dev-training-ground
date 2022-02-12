import React, { useState } from "react";
import codeSnippet from "../../assets/images/reactButtonCodeSnippet.png";
import "./ReactButtonTutorial.css"

export default function ReactButtonTutorial() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  const clickReset = () => {
    setCount(0)
  }

  return (
    <>
      <div className="react-button__buttons">
        <button className="react-button__btn" onClick={clickHandler}>Click</button>
        <h1 className="react-button__count">{count}</h1>
        <button className="react-button__btn" onClick={clickReset}>Reset</button>
      </div>
      <div className="react-button__container">
        <img className="react-button__container__image" src={codeSnippet} alt="code snippet" />
      </div>
      <ol className="react-button__ol">
        <li className="react-button__li">
          Be sure to import useState as we will need to manage the state of the
          counter.
        </li>
        <li className="react-button__li">
          Create a function that will return our JSX(markup). This should have
          the button and an element to display our counter.
        </li>
        <li className="react-button__li">
          Lets create our state and set it to default to 0. The default state is
          what is in the parenthesis after useState.{" "}
        </li>
        <li className="react-button__li">
          Add a clickHandler to handle the onClick attribute that we will assign
          to our button.
        </li>
        <li className="react-button__li">Set onClick attribute on our button to the clickHandler</li>
      </ol>
    </>
  );
}
