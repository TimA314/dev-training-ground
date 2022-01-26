import React from "react";
import ReactMarkdown from "react-markdown";
import forkRepoImage from "./../assets/images/forkRepoImage.png"
import cloneRepoImage from "./../assets/images/cloneRepoImage.jpg";
import routesImage from "./../assets/images/routesImage.jpg";
import "../css/Home.css";
import FirstLook from "../components/FirstLook";
import GettingStarted from "../components/GettingStarted";

export default function Home() {
  return (
    <>
      <div className="home__container">
        <FirstLook />
        <GettingStarted />
      </div>
    </>
  );
}
