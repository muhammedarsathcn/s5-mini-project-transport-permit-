import React, { useEffect, useState } from "react";
import "./css/AdminApprove.css";
import img from "./images/TWP logo.png";
export default function Approval() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/transportpermit/get-all-userdetails"
        );
        if (!response.ok) {
          throw new Error(`HTTP ERROR: ${response.status}`);
        }
        const result = await response.json();
        setDetails(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const update = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/update/${id}?status=verified`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        alert("Status updated");
        // Optionally, refetch the details to reflect the updated status
        const updatedDetails = details.map((detail) =>
          detail.id === id ? { ...detail, status: "verified" } : detail
        );
        setDetails(updatedDetails);
      } else {
        alert("Status update failed");
      }
    } catch (error) {
      alert("Status update failed");
    }
  };

  return (
    <div>
      <div className="header">
        <img src={img} alt="Login" />
        <h1>Transport Permit</h1>
      </div>
      <div className="line"></div>
      <div className="title">
      <h1>Approval Page</h1>
      </div>

      <div className="approval-wrap">
        {details.map((show, index) => (
          <div key={index} className="container-approval">
            <div className="small-container-approval">
              <p>
                <b>Name: </b> {show.name}
              </p>
              <p>
                <b>Vehicle No:</b> {show.vehicleNo}
              </p>
              <p>
                <b>License Number :</b> {show.licenseNo}
              </p>
              <p>
                <b>Number Of Days : </b> {show.no_of_days}
              </p>
              <p>
                <b>From : </b> {show.fromPlace}
              </p>
            </div>

            <div className="small-container">
              <p>
                <b>To: </b> {show.toPlace}
              </p>
              <p>
                <b>From Date :</b> {show.fromDate}
              </p>
              <p>
                <b>To Date : </b> {show.toDate}
              </p>
              <p>
                <b>Vehicle Mode : </b>
                {show.vehicleMode}
              </p>
              <p>
                <b>Amount Payed : </b> {show.amount}
              </p>
            </div>

            <div className="Btn-container-approval">
              <button className="btn-reject">Reject</button>
              <button className="btn-approval" onClick={() => update(show.id)}>
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
