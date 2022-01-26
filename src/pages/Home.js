import React from "react";
import Navbar from "../navbar/Navbar";
import "../css/Home.css";
import FirstLook from "../components/FirstLook";
import GettingStarted from "../components/GettingStarted";

export default function Home() {
  return (
    <>
      <div className="home__container">
        <Navbar />
        <FirstLook />
        <GettingStarted />
      </div>
    </>
  );
}
