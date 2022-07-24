import React from "react";
import Navbar from "../navbar/Navbar";
import "../css/Home.css";
import Aboutus from "../components/Aboutus";
import Courses from "../components/Courses";
import Features from "../components/Features";
import ContributeSection from "../components/ContributeSection";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="home__container">
        <Navbar />
        <HeroSection/>
        <Aboutus/>
        <Courses/>
        <Features/>
        <ContributeSection/>
      </div>
    </>
  );
}
