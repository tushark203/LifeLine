import React from "react";
import "../styles/AllRequests.css";
const AllRequests = () => {
  return (
    <div className="all-requests-cont">
      <table className="all-req-table">
        <thead>
          <th>Sr No.</th>
          <th>Date</th>
          <th>Blood Group</th>
          <th>Blood Requirement (ml)</th>
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
              <button className="req-del-btn">Delete</button>
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

export default AllRequests;
