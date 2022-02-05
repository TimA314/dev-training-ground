import React from "react";
import styled from "styled-components";
import about from "../assets/images/aboutus.png";
import point from "../assets/images/right.png";

function Aboutus() {
  return (
    <>
      <Wrapper>
        <LeftContainer>
          <ImageContainer>
            <Image src={about} />
          </ImageContainer>
        </LeftContainer>

        <RightContainer>
          <Heading>About Us</Heading>
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
        </RightContainer>
      </Wrapper>
    </>
  );
}

export default Aboutus;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 30px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// LEFT CONTAINER STYLING
const LeftContainer = styled.div`
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

// RIGHT CONTAINER STYLING
const RightContainer = styled.div`
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
  color: #2e0b64;
  &:after {
    content: "";
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: -10px;
    background: #2e0b64;
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
`;
const Content = styled.div`
  flex: 1;
  font-size: 18px;
  background: #2e0b64;
  color: white;
  padding: 10px 15px;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
