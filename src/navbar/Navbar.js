import React from "react";
import Logo from "../assets/images/logo.png";
import Dropdown from "./dropdown/Dropdown";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href="/">
          <div className="navbar-logo">
            <img src={Logo} />
          </div>
        </a>
        <ul>
          <a href="/"> <li>Home</li> </a>
          <a href="/tutorial"> <li>Tutorials</li> </a>
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
              <Dropdown title="Resources" items={["First", "Second", "Third"]} />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
