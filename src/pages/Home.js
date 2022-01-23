import React from "react";
import cloneRepoImage from "./../assets/images/cloneRepoImage.jpg";
import routesImage from "./../assets/images/routesImage.jpg";
export default function Home() {
  return (
    <>
      <h1>Dev Training Grounds</h1>
      <p>
        Put your skills to the test and help build a project with the community.
      </p>
      <div>
        <h3>Getting Started:</h3>
        <ul>
          <li>clone this repo</li>
          <img src={cloneRepoImage} alt="screenshot" width={300} />
          <li>Create a file under projects</li>
          <li>Make sure to add a route in the app.js</li>
          <img src={routesImage} alt="screenshot" width={300} />
          <li>Build whatever you like</li>
        </ul>
      </div>
    </>
  );
}
