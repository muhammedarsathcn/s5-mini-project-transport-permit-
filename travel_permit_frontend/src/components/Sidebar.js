import React from "react";
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Transport Permit</h3>
      <hr></hr>
      <ul>
        <li>Home</li>
        <li>Notifications</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;