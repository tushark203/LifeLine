import React from "react";
import "../styles/AdminCurrDonation.css";
const AdminCurrDonation = () => {
  return (
    <div className="admin-db-current">
      <table className="admin-db-current-table">
        <thead>
          <th>Sr No.</th>
          <th>Date</th>
          <th>Name</th>
          <th>Age</th>
          <th>Blood Group</th>
          <th>Unit(ml)</th>
          <th>contact</th>
          <th>Action</th>
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
            <td>
              <button className="admin-req-del-btn">Approve</button>
              <button className="admin-req-del-btn">Reject</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>22-7-23</td>
            <td>Name name name</td>
            <td>26</td>
            <td>A+</td>
            <td>300</td>
            <td>90876545</td>
            <td>
              <button className="admin-req-del-btn">Approve</button>
              <button className="admin-req-del-btn">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminCurrDonation;
