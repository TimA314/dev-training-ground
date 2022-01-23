import React from "react";
import ReactMarkdown from "react-markdown";
import forkRepoImage from "./../assets/images/forkRepoImage.png"
import cloneRepoImage from "./../assets/images/cloneRepoImage.jpg";
import routesImage from "./../assets/images/routesImage.jpg";
export default function Home() {
  const markdown = `# Dev Training Grounds

  Put your skills to the test and help build a project with the community.
  Devs can create a webpage or feature and create a corresponding route linking to it.

  ### Getting started

  1. Fork this repo to create a copy on your github account. (This step makes creating a pull request easier)

  ![Fork Repo image](${forkRepoImage})

  2. Copy the url for the github repo to clone to local dev enviroment.

  ![Clone Repo image](${cloneRepoImage})

  3. Clone the repo in desired directory using the following git command.

  >  git clone <repo-url>

  4. Create a file in pages directory showcasing your project.

  5. Add a route linking to your page in app.js.

  ![Route image](${routesImage})
  
  6. Create a pull request against the primary repo to be reviewed and implemented into the codebase.`

  return (
    <>
      <ReactMarkdown children={markdown} />
    </>  
  );
}
