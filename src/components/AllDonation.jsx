import React from "react";
import "../styles/AllDonation.css";
const AllDonation = () => {
  return (
    <div className="all-donation-cont">
      <table className="all-donation-table">
        <thead>
          <th>Sr No.</th>
          <th>Date</th>
          <th>Blood Group</th>
          <th>Blood Donated (ml)</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>22-7-23</td>
            <td>A+</td>
            <td>300</td>
            <td>pending</td>
            <td>
              <button className="donation-del-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>22-7-23</td>
            <td>A+</td>
            <td>300</td>
            <td>Approved</td>
            <td>No Action</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllDonation;
