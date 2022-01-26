import React from "react";

import Dropdown from "./dropdown/Dropdown";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">Dev Training Grounds</div>
        <ul>
         <a href="/"> <li>Home</li> </a>
         <a href="/tutorial"> <li>Tutorials</li> </a>
          <li>
            <Dropdown
              title="Developer Projects"
              items={["First", "Second", "Third"]}
            />
          </li>
          <li>
            <Dropdown title="Resources" items={["First", "Second", "Third"]} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
