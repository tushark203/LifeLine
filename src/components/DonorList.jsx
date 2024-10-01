import React from "react";
import "../styles/DonorList.css";
const DonorList = () => {
  return (
    <div className="donor-list">
      <table className="donor-list-table">
        <thead>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Blood Group</th>
          <th>contact</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Name name name</td>
            <td>26</td>
            <td>A+</td>
            <td>90876545</td>
            <td>
              <button className="admin-req-del-btn">delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>

            <td>Name name name</td>
            <td>26</td>
            <td>A+</td>

            <td>90876545</td>
            <td>
              <button className="admin-req-del-btn">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DonorList;
