import React from "react";
import "../css/Sidebar.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h3>Transport Permit</h3>
      <hr></hr>
      <ul>
        <a href="/check-home">
          <li>Home</li>
        </a>
        <a href="/check-verify">
        <li>Checking Page</li>
        </a>
        <li>Logout</li>
       
      </ul>
    </div>
  );
};

export default AdminSidebar;
