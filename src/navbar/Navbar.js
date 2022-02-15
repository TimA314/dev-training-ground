import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import "./Navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../features/DarkMode";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  return (
    <div className="navbar-container">
      <div className={`navbar ${darkMode ? "dark" : "light"}`}>
        <Link to="/">
          <div className="navbar-logo">
            <img className={`${darkMode ? "white" : ""}`} src={Logo} />
          </div>
        </Link>
        <ul
          className={`${darkMode ? "navbarTextDark navLinks" : "navLinks"} ${
            sideBar ? "remove" : "add"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/tutorial">Tutorials</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/contribute">Contribute</Link>
          <Link to="/blogs">Blogs</Link>
        </ul>
        <DarkModeToggle
          onChange={() => {
            dispatch(setDarkMode(darkMode ? false : true));
          }}
          checked={darkMode}
          size={50}
        />
        <Menu className="iconHumb" onClick={() => setSideBar(!sideBar)} />
      </div>
    </div>
  );
};

export default Navbar;
