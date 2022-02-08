import React from "react";
import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import { Blogs } from "../Data/Blogs";
import { useSelector } from "react-redux";

function BlogSection() {
  const darkMode = useSelector((state) => state.darkMode.value);

  const darktheme = {
    bg: "#000000",
    color: "white",
  };

  const lightheme = {
    bg: "white",
    color: "#000000",
  };

  return (
    <>
      <Navbar />
      <Wrapper theme={darkMode ? darktheme : lightheme}>
        <Heading theme={darkMode ? darktheme : lightheme}>
          Blogs and Articles
        </Heading>
        <BlogsContainer>
          {Blogs.map((blog, key) => {
            return <BlogCard key={key} title={blog.title} link={blog.link} />;
          })}
        </BlogsContainer>
      </Wrapper>
    </>
  );
}

export default BlogSection;

const Wrapper = styled.div`
  padding: 70px 50px;
  background-color: ${(props) => props.theme.bg};
  min-height: 70vh;
`;
const Heading = styled.h1`
  text-align: center;
  position: relative;
  margin: 0 auto;
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

const BlogsContainer = styled.div`
  width: 80%;
  margin: 40px auto;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
