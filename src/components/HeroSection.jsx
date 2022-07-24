import React from "react";
import styled from "styled-components";
import HeroBG from "../assets/images/herobg.png";
import HeroImg from "../assets/images/heroImg.png";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <Container>
      <LeftWrapper>
        <SubHeading>WANT TO LEARN ?</SubHeading>
        <Heading>WEB DEVELOPMENT</Heading>
        <Para>LEARN AT YOUR OWN PACE</Para>
        <Link to="/tutorial">
          <ExploreBtn>Explore our Tutorials</ExploreBtn>
        </Link>
      </LeftWrapper>
      <RightWrapper>
        <ImageWrapper>
          <Image src={HeroImg}></Image>
        </ImageWrapper>
      </RightWrapper>
    </Container>
  );
}

export default HeroSection;

const Container = styled.div`
  * {
    text-decoration: none;
  }
  width: 100%;
  height: 600px;
  background-image: url(${HeroBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  display: flex;
  padding: 0px 60px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffff;
  flex: 1;
`;
const SubHeading = styled.p`
  font-size: 35px;
`;
const Heading = styled.h1`
  margin-top: 20px;
  font-size: 60px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.1em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;
const Para = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;
const ExploreBtn = styled.p`
  background-color: #ef9c14;
  padding: 12px 20px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  color: #ffff;
  margin: 30px auto 0px 0px;
  width: fit-content;
`;

const RightWrapper = styled.div`
  display: grid;
  place-items: center;
  flex: 1;
`;
const ImageWrapper = styled.div`
  margin-left: auto;
  width: 600px;
  height: 400px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
