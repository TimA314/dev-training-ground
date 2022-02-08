import React from "react";
import styled from "styled-components";
import arrow from "../assets/images/right-chevron.png";
import { Bounce } from "react-awesome-reveal";
import {Link} from "react-router-dom";
function BlogCard({ title, link }) {
  return (
    <>
      <Bounce triggerOnce="true">
        <BlogTitleBar>
          <Content>
            <Arrow src={arrow} />
            <BlogTitle>{title}</BlogTitle>
          </Content>
          <Link to={link}>
          <BlogBtn>Learn</BlogBtn>
          </Link>
        </BlogTitleBar>
      </Bounce>
    </>
  );
}

export default BlogCard;

const BlogTitleBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  justidy-content: space-between;
  margin: 26px 0px;
  background: #fafafa;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  border: 1px solid rgba(128, 128, 128, 0.3);
  &:hover {
    transform: scale(1.1);
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
`;
const BlogTitle = styled.p`
  display: inline-block;
  flex: 1;
  margin-right: 10px;
  @media screen and (max-width: 580px) {
    margin-right: 0px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogBtn = styled.span`
  margin-left: auto;
  background: #4865e5;
  color: white;
  padding: 7px 18px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 580px) {
    margin: 15px 0 0 auto;
    font-size: 15px;
  }
`;
