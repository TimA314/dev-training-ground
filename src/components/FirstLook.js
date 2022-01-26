import React from "react";
import "../css/FirstLook.css";

const FirstLook = () => {
    return (
        <>
            <div className="wrapper">
                <div className="box__container">
                    <div className="box">
                        <div className="content">
                            <h1>Dev Training Grounds</h1>
                            <p>Put your skills to the test and help build a project with the community. Devs can create a webpage or feature and create a corresponding route linking to it.</p>
                            <a href="/tutorial" target="_blank">Explore more Tutorials</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstLook;