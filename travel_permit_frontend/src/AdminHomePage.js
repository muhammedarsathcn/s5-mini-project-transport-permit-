import React from "react";
import approvedImage from "./images/approvedimg.jpg";
import checklist from "./images/checklist.jpg";
import img from "./images/TWP logo.png";
import './css/AdminHomePage.css';
import { Link } from "react-router-dom";

export default function AdminLandingPage() {
  return (
    <div>
       <div className="header">
        <img src={img} alt="Login" />
        <h1>Transport Permit</h1>
      </div>
      <div className="line"></div>
      <div className="title">
      <h1>Admin Home Page</h1>
      </div>

      <div className="admin-hm-container">
    
        <Link to="/admin-approve" style={{ textDecoration: "none", color: "black" }}>
          <div className="admin-hm-sm-container">
            <img src={checklist} alt=" Approval Page" />
            <p>Approval Page</p>
          </div>
        </Link>

   
        <Link
          to="/approvedlist"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="admin-hm-sm-container">
            <img src={approvedImage} alt="Approved list " />
            <p>Approved List</p>
          </div>
        </Link>


        <Link to="/deleted" style={{ textDecoration: "none", color: "black" }}>
          <div className="admin-hm-sm-container">
            <img src={approvedImage} alt="Deleted list " />
            <p>Deleted List</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
