import React from "react";
import styled from "styled-components";
import point from "../assets/images/right.png";
import courses from "../assets/images/courses.jpg";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <>
      <Wrapper>
        <LeftContainer>
          <Heading>Courses</Heading>
          <DataContainer>
            <Data>
              <PointContainer>
                <Point src={point} />
              </PointContainer>
              <Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                asperiores.
              </Content>
            </Data>
            <Data>
              <PointContainer>
                <Point src={point} />
              </PointContainer>
              <Content>
                We cover every topic in detail with a hands-on approach and
                mentor you to stand out to get opportunities by breaking all the
                barriers.
              </Content>
            </Data>
          </DataContainer>
          <Pricing>
            <h2>Pricing: 0$/m</h2>
          </Pricing>
          <CoursesContainer>
            <Link to="/tutorial">Explore our courses</Link>
          </CoursesContainer>
        </LeftContainer>

        <RightContainer>
          <ImageContainer>
            <Image src={courses} />
          </ImageContainer>
        </RightContainer>
      </Wrapper>
    </>
  );
}

export default Courses;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 30px;
  align-items: center;
  background: #181818;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// RIGHT CONTAINER STYLING
const RightContainer = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  height: 350px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

// LEFT CONTAINER STYLING
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  position: relative;
  color: #fff;
  &:after {
    content: "";
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: -10px;
    background: #fff;
    border-radius: 3px;
  }
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;
const DataContainer = styled.div`
  margin-top: 20px;
`;
const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 17px 10px;
`;
const PointContainer = styled.div`
  height: 30px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
const Point = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: invert(59%);
`;
const Content = styled.div`
  flex: 1;
  font-size: 18px;
  background: #303030;
  color: white;
  padding: 10px 15px;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Pricing = styled.div`
  margin: 7px 0px;
  color: #fff;
`;

// CONTRIBUTE BUTTON STYLING
const CoursesContainer = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  background: #303030;
  border: 0;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  * {
    text-decoration: none;
    color: #ffff;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
