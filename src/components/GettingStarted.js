import React from "react";
import "../css/GettingStarted.css";
import forkRepoImage from "./../assets/images/forkRepoImage.png"
import cloneRepoImage from "./../assets/images/cloneRepoImage.jpg";
import routesImage from "./../assets/images/routesImage.jpg";
import {useSelector} from "react-redux";


const GettingStarted = () => {
    const darkMode=useSelector((state)=>state.darkMode.value);
    const command = `git clone <repo-url>`;

    return (
        <>
            <div id={`wrapper`} className={`${darkMode ? "darkWrapper" : "lightWrapper"}`}>
                <div className={`steps__container ${darkMode ? "darkStepsContainer" : "lightStepsContainer"}`}>
                    <h2 >Getting Started</h2>

                    <ol>
                        <li className="item"><p>Fork this repo to create a copy on your github account. (This step makes creating a pull request easier)</p>
                            <div className="image__container">
                                <img src={forkRepoImage} />
                            </div>
                        </li>

                        <li className="item"><p>Copy the url for the github repo to clone to local dev enviroment.</p>
                            <div className="image__container">
                                <img src={cloneRepoImage} />
                            </div>
                        </li>

                        <li className="item"><p>Clone the repo in desired directory using the following git command.</p>
                            <div className="command">{command}</div>
                        </li>

                        <li className="item"><p>Install dependencies by using the following command.</p>
                            <div className="command">npm install</div>
                        </li>

                        <li className="item"><p>Create a file in pages/Projects directory showcasing your project.
                        </p>
                        </li>

                        <li className="item"><p>Add a route linking to your page in app.js.
                        </p>
                            <div className="image__container">
                                <img src={routesImage} />
                            </div>
                        </li>

                        <li className="item"><p>Create a pull request against the primary repo to be reviewed and implemented into the codebase.
                        </p>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}
export default GettingStarted;