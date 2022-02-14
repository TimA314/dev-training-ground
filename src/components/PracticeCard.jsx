import React from "react";
import styled from "styled-components";
import logo from "../assets/images/js.png";
import { useSelector } from "react-redux";
import { Bounce } from "react-awesome-reveal";

function PracticeCard() {
  const darkMode = useSelector((state) => state.darkMode.value);

  const darktheme = {
    bg: "#262626",
    color: "white",
  };

  const lightheme = {
    bg: "white",
    color: "#000000",
  };

  return (
    <Bounce triggerOnce="true">
      <Wrapper theme={darkMode ? darktheme : lightheme}>
        <UpperSection>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
          <Title theme={darkMode ? lightheme : darktheme}>
            JavaScript Practice Test
          </Title>
        </UpperSection>

        <MiddleSection>
          <Description theme={darkMode ? lightheme : darktheme}>
            Test your JS Learning by giving MCQ based test.
          </Description>
          <Score_Problem_Section theme={darkMode ? lightheme : darktheme}>
            <TotalProblems>
              <Count>20</Count>
              <Desc>Total Problems</Desc>
            </TotalProblems>
            <TotalScore>
              <Count>40</Count>
              <Desc>Total Score</Desc>
            </TotalScore>
          </Score_Problem_Section>
        </MiddleSection>

        <StartButton>Start Test</StartButton>
      </Wrapper>
    </Bounce>
  );
}

export default PracticeCard;

const Wrapper = styled.div`
  border: 1px solid rgba(210, 215, 211, 0.3);
  padding: 20px 20px 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  min-height: 350px;
  background-color: ${(props) => props.theme.bg};
  color: #ffff;
  box-shadow: 1px 1px 15px -7px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 1px 1px 15px -7px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 1px 1px 15px -7px rgba(0, 0, 0, 0.8);
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;
const UpperSection = styled.div`
  display: flex;
  align-items: center;
`;
const LogoContainer = styled.div`
  height: 50px;
  width: 100px;
  margin-right: 20px;
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.h2`
  color: ${(props) => props.theme.bg};
`;
const MiddleSection = styled.div`
margin: auto;
`;

const Description = styled.div`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.bg};
`;
const Score_Problem_Section = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${(props) => props.theme.bg};
`;
const TotalProblems = styled.div`
  text-align: center;
  font-weight: 600;
  margin-right: 30px;
`;
const TotalScore = styled.div`
  text-align: center;
  font-weight: 600;
`;
const Desc = styled.p``;
const Count = styled.p``;
const StartButton = styled.div`
  width: 140px;
  text-align: center;
  padding: 7px 15px;
  color: #ffff;
  border-radius: 5px;
  background: #4865e5;
  margin-top: auto;
  cursor: pointer;
  margin-bottom: 10px;
`;
