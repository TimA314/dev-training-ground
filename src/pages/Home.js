import React from "react";
import Navbar from "../navbar/Navbar";
import "../css/Home.css";
import FirstLook from "../components/FirstLook";
import Aboutus from "../components/Aboutus";

export default function Home() {
  return (
    <>
      <div className="home__container">
        <Navbar />
        <FirstLook />
        <Aboutus/>
      </div>
    </>
  );
}
