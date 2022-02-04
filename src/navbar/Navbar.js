import { React, useState } from "react";
import Logo from "../assets/images/logo.png";
import Dropdown from "./dropdown/Dropdown";
import "./Navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../features/DarkMode";

const Navbar = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  return (
    <div className={`navbar-container ${darkMode ? "dark" : "light"}`}>
      <div className="navbar">
        <a href="/">
          <div className="navbar-logo">
            <img src={Logo} />
          </div>
        </a>
        <ul className={`${darkMode ? "navbarTextDark" : ""}`}>
          <a href="/">
            {" "}
            <li>Home</li>{" "}
          </a>
          <a href="/tutorial">
            {" "}
            <li>Tutorials</li>{" "}
          </a>
          <a>
            <li>
              <Dropdown
                title="Developer Projects"
                items={["First", "Second", "Third"]}
              />
            </li>
          </a>
          <a>
            <li>
              <Dropdown
                title="Resources"
                items={["First", "Second", "Third"]}
              />
            </li>
          </a>
          <DarkModeToggle
            onChange={() => {
              dispatch(setDarkMode(darkMode ? false : true));
            }}
            checked={darkMode}
            size={50}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
