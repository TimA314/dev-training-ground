import React  from "react";
import Logo from "../assets/images/logo.png";
import "./Navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../features/DarkMode";
import { Link } from "react-router-dom";
const Navbar = () => {
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
        <ul className={`${darkMode ? "navbarTextDark" : ""}`}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/tutorial">
            <li>Tutorials</li>{" "}
          </Link>
          <Link to="/practice">
            <li>Practice</li>
          </Link>
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
      </div>
    </div>
  );
};

export default Navbar;
