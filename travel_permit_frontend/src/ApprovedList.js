import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import "./css/ApprovedList.css";
export default function ApprovedList() {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div className="table">
        <div style={{textAlign:"center"}}><h1>Approved List</h1></div>
      <table>
        <tr>
          <th>Name</th>
          <th>Vehicle No</th>
          <th>License Number</th>
          <th>Number Of Days</th>
          <th>From Place</th>
          <th>To Place</th>
          <th>From Date</th>
          <th>To Date</th>
          <th>Vehicle Mode</th>
          <th>Amount payed</th>
        </tr>
        <tr>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
        </tr>
        <tr>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
        </tr>
      </table>
    </div>
    </div>
  );
}
