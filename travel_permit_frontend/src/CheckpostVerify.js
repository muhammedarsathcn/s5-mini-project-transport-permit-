import React, { useEffect, useState } from "react";
import Navbar from "./components/ChcekNavbar";
import "./css/CheckPostVerify.css";
export default function CheckpostVerify() {
    const[approved,setapproved] = useState([]);

    const handlePassed = async(id) =>{
        try{
            await fetch(`http://localhost:8080/transportpermit/passed-status/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },

            })
            window.location.reload();
        }
        catch(error)
        {
            console.error("Error in changeing the Passed vehicle",error)
        }
    }

    useEffect(()=>{

        const fetchapprovedlist = async(e)=>{
            try{
                const response = await fetch("http://localhost:8080/transportpermit/approved-list");
                const data = await response.json();
                setapproved(data)
            }
            catch(error)
            {
                console.error("Error to Fetch Approved List",error)
            }

        }
        fetchapprovedlist();
    },[])
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Navbar />
      <div className="maincontent">
        <h1> Verification Page</h1>
        <div className="searchbox">
          <input type="search" placeholder="search Id Here" />
          <button>Search</button>
        </div>
        <table>
          <thead>
          <tr>
            <th>Permit Id</th>
            <th>Name</th>
            <th>Vehicle No</th>
            <th>License Number</th>
            <th>Number Of Days</th>
            <th>From Place</th>
            <th>To Place</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Vehicle Mode</th>
            <th>Amount Payed</th>
            <th>Approved</th>
          </tr>
          </thead>
          <tbody>
          {approved.map((show)=>(
                     
            <tr key={show.id}>
                <th>{show.id}</th>
                <th>{show.name}</th>
                <th>{show.vehicleNo}</th>
                <th>{show.licenseNo}</th>
                <th>{show.no_of_days}</th>
                <th>{show.fromPlace}</th>
                <th>{show.toPlace}</th>
                <th>{show.fromDate}</th>
                <th>{show.toDate}</th>
                <th>{show.vehicleMode}</th>
                <th>{show.amount}</th>
                <th><button onClick={()=>handlePassed(show.id)}>Passed</button></th>


            </tr>
            
          ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}
