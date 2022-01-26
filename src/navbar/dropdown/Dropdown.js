import React from "react";
import "./Dropdown.css";

const Dropdown = ({ title, items }) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-title">{title}</div>
      <div className="dropdown-list">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
