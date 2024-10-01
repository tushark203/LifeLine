import React from "react";
import "../styles/DonateBloodHistory.css";
const DonateBloodHistory = () => {
  return (
    <div className="admin-db-history">
      <table className="admin-db-history-table">
        <thead>
          <th>Sr No.</th>
          <th>Date</th>
          <th>Name</th>
          <th>Age</th>
          <th>Blood Group</th>
          <th>Unit(ml)</th>
          <th>contact</th>
          <th>Status</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>22-7-23</td>
            <td>Name name name</td>
            <td>26</td>
            <td>A+</td>
            <td>300</td>
            <td>90876545</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>1</td>
            <td>22-7-23</td>
            <td>Name name name</td>
            <td>26</td>
            <td>A+</td>
            <td>300</td>
            <td>90876545</td>
            <td>Rejected</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DonateBloodHistory;
