import React from "react";
import "../styles/BloodRequestHistory.css";
const BloodRequestHistory = () => {
  return (
    <div className="admin-br-history">
      <table className="admin-br-history-table">
        <thead>
          <th>Sr No.</th>
          <th>Date</th>
          <th>Name</th>
          <th>Age</th>
          <th>Resone</th>
          <th>Blood Group</th>
          <th>Unit(ml)</th>
          <th>Address</th>
          <th>contact</th>
          <th>Status</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>22-7-23</td>
            <td>Name name name</td>
            <td>26</td>
            <td>hhh</td>
            <td>A+</td>
            <td>300</td>
            <td>Adrr addrr addrr addrr addrr add rr a d </td>
            <td>90876545</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>1</td>
            <td>22-7-23</td>
            <td>Name name name</td>
            <td>26</td>
            <td>hhh</td>
            <td>A+</td>
            <td>300</td>
            <td>Adrr</td>
            <td>90876545</td>
            <td>Rejected</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodRequestHistory;
