import React from "react";
import styled from "styled-components";
import Notebook from "../assets/images/notebook.png";
function Features() {
  return (
    <>
      <Wrapper>
        <FeaturesContainer>
          <Heading>Features</Heading>
          <Cards>
            <Card>
              <ImageContainer>
                <Image src={Notebook} />
              </ImageContainer>
              <SubHeading>Structured Learning</SubHeading>
              <Desc>
                Learning made easy. Complete syllabus is covered while never
                compromising on quality.
              </Desc>
            </Card>
            <Card>
              <ImageContainer>
                <Image src={Notebook} alt=""/>
              </ImageContainer>
              <SubHeading>Structured Learning</SubHeading>
              <Desc>
                Learning made easy. Complete syllabus is covered while never
                compromising on quality.
              </Desc>
            </Card>
            <Card>
              <ImageContainer>
                <Image src={Notebook} />
              </ImageContainer>
              <SubHeading>Structured Learning</SubHeading>
              <Desc>
                Learning made easy. Complete syllabus is covered while never
                compromising on quality.
              </Desc>
            </Card>
          </Cards>
        </FeaturesContainer>
      </Wrapper>
    </>
  );
}

export default Features;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 30px;
  align-items: center;
  background :#F5F5F5;	
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px 10px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  position: relative;
  color: #303030;
  margin-bottom: 30px;

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: -10px;
    background: #303030;
    border-radius: 3px;
  }
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 5px;
  height: 200px;
  background: #303030;
  border-radius: 5px;
`;
const ImageContainer = styled.div`
  width: 50px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: invert(100%);
`;
const SubHeading = styled.h3`
  text-align: center;
  margin: 10px 0px;
`;
const Desc = styled.p`
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 0px 10px;
  }
`;
