import { React, useState } from "react";
import Logo from "../assets/images/logo.png";
import "./Navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../features/DarkMode";

const Navbar = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  return (
    <div className="navbar-container">
      <div className={`navbar ${darkMode ? "dark" : "light"}`}>
        <a href="/">
          <div className="navbar-logo">
            <img className={`${darkMode ? "white" : ""}`} src={Logo} />
          </div>
        </a>
        <ul className={`${darkMode ? "navbarTextDark" : ""}`}>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/tutorial">
            <li>Tutorials</li>{" "}
          </a>
          <a href="/contribute">Contribute</a>
          
        </ul>
        <DarkModeToggle
            onChange={() => {
              dispatch(setDarkMode(darkMode ? false : true));
            }}
            checked={darkMode}
            size={50}
          />
      </div>
    </div>
  );
};

export default Navbar;
