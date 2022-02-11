import React from "react";
import styled from "styled-components";
import PracticeCard from "../components/PracticeCard";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";

function PracticeSection() {
  const darkMode = useSelector((state) => state.darkMode.value);

  const darktheme = {
    bg: "#1A1919",
    color: "white",
  };

  const lightheme = {
    bg: "white",
    color: "#000000",
  };
  return (
    <>
      <Navbar />
      <Container theme={darkMode ? darktheme : lightheme}>
        <Heading theme={darkMode ? darktheme : lightheme}>
          Practice Your Learnings
        </Heading>
        <PracticeContainer>
          <PracticeCard />
          <PracticeCard />
          <PracticeCard />
          <PracticeCard />
        </PracticeContainer>
      </Container>
    </>
  );
}

export default PracticeSection;

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding-top: 70px;
`;

const PracticeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 50px 50px;
  margin-top: 40px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    padding: 10px 30px;
  }

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 10px 30px;
  }
`;
const Heading = styled.h1`
  text-align: center;
  position: relative;
  margin: 0px auto;
  width: fit-content;
  color: ${(props) => props.theme.color};
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #4865e5;
    bottom: -10px;
    border-radius: 5px;
  }

  @media screen and (max-width: 580px) {
    font-size: 30px;
  }
`;
