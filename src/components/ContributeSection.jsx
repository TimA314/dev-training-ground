import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import octocat from "../assets/images/Octocat.png";

function ContributeSection() {
  return (
    <>
      <Wrapper>
        <Heading>Contribute</Heading>
        <ContributeSectionContainer>
          <LeftContainer>
            <ImageContainer>
              <Image src={octocat} />
            </ImageContainer>
          </LeftContainer>

          <RightContainer>
            <Data>
              <SubHeading>Why Contribute?</SubHeading>
              <Desc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                corrupti, a velit maiores ex recusandae unde veritatis
                repudiandae illo numquam.
              </Desc>
              <ContributeButton>
                <Link to="contribute">How to Contribute?</Link>
              </ContributeButton>
            </Data>
          </RightContainer>
        </ContributeSectionContainer>
      </Wrapper>
    </>
  );
}

export default ContributeSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  background: #181818;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  position: relative;
  color: #ffff;
  margin-bottom: 30px;

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: -10px;
    background: #ffff;
    border-radius: 3px;
  }
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

const ContributeSectionContainer = styled.div`
  margin: 25px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 650px) {
    display: flex;
  }
`;

// LEFT SIDE STYLING
const LeftContainer = styled.div`
  display: grid;
  place-items: center;
`;
const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #9cdaf0;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

// RIGHT SIDE STYLING
const RightContainer = styled.div``;
const Data = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  background: #303030;
  padding: 5px 15px;
  border-radius: 5px;
`;
const SubHeading = styled.h2`
  text-align: center;
`;
const Desc = styled.p`
  margin: 40px 0px;
  text-align: center;
`;
const ContributeButton = styled.div`
  display: inline-block;
  text-align: center;
  border: 2px solid white;
  padding: 7px 12px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 7px;

  * {
    text-decoration: none;
    color: #fff;
  }
`;
