import React from "react";
import "../css/TutorialSection.css";
import TutorialCard from "../components/TutorialCard";

const TutorialSection = () => {
    return (
        <>
            <div className="tutorial_section_container">
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
            </div>
        </>
    );
};

export default TutorialSection;