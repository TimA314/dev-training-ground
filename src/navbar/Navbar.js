import React from "react";

import Dropdown from '../dropdown/Dropdown'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">Dev Training Grounds</div>
        <ul>
          <li>Home</li>
          <li><Dropdown title='Dropdown one' items={['First', 'Second', 'Third']}/></li>
          <li><Dropdown title='Dropdown two' items={['First', 'Second', 'Third']}/></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
