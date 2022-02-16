import React from "react";
import styled from "styled-components";
import arrow from "../assets/images/right-chevron.png";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function BlogCard({ title, link }) {
  return (
    <>
      <Bounce triggerOnce="true">
        <BlogTitleBar>
          <Content>
            <Arrow src={arrow} alt=""/>
            <BlogTitle>{title}</BlogTitle>
          </Content>
          <BlogBtn>
            <Link to={link}>Learn</Link>
          </BlogBtn>
        </BlogTitleBar>
      </Bounce>
    </>
  );
}

export default BlogCard;

const BlogTitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 26px 0px;
  background: #303030;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
  @media screen and (max-width: 580px) {
    flex-direction: column;
    margin: 15px 0;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Arrow = styled.img`
  width: 20px;
  margin-right: 10px;
  padding-top: 3px;
  filter: invert(100%);
`;
const BlogTitle = styled.p`
  display: inline-block;
  flex: 1;
  margin-right: 10px;
  color: #ffff;
  @media screen and (max-width: 580px) {
    margin-right: 0px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogBtn = styled.div`
  margin-left: auto;
  background: #4865e5;
  padding: 7px 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  * {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 580px) {
    margin: 15px 0 0 auto;
    font-size: 15px;
  }
`;
