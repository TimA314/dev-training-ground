import React from "react";
import Navbar from "../navbar/Navbar";
import "../css/Home.css";
import FirstLook from "../components/FirstLook";
import Aboutus from "../components/Aboutus";
import Courses from "../components/Courses";
import Features from "../components/Features";
import ContributeSection from "../components/ContributeSection";

export default function Home() {
  return (
    <>
      <div className="home__container">
        <Navbar />
        <FirstLook />
        <Aboutus/>
        <Courses/>
        <Features/>
        <ContributeSection/>
      </div>
    </>
  );
}
