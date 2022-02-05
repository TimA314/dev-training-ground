import React, { useState } from "react";
import codeSnippet from "../../assets/images/reactButtonCodeSnippet.png";

export default function ReactButtonTutorial() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={clickHandler}>Click Here</button>
      </div>
      <div>
        <img src={codeSnippet} alt="code snippet" width={500} />
      </div>
      <ol>
        <li>
          Be sure to import useState as we will need to manage the state of the
          counter.
        </li>
        <li>
          Create a function that will return our JSX(markup). This should have
          the button and an element to display our counter.
        </li>
        <li>
          Lets create our state and set it to default to 0. The default state is
          what is in the parenthesis after useState.{" "}
        </li>
        <li>
          Add a clickHandler to handle the onClick attribute that we will assign
          to our button.
        </li>
        <li>Set onClick attribute on our button to the clickHandler</li>
      </ol>
    </>
  );
}
