import React from "react";
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Transport Permit</h3>
      <hr></hr>
      <ul>
       <a href="/user-home"> <li>Home</li></a>
        <a href="/user-form"><li>Normal Form</li></a>
        <a href="/takal-form"><li>Takal Form</li></a>
      <a href="/user-dashboard"><li>DashBoard</li></a>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;