import React from "react";
import "../styles/AdminCurrBloodReq.css";
const AdminCurrBloodReq = () => {
  return (
    <div className="admin-br-current">
      <table className="admin-br-current-table">
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
          <th>Action</th>
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
            <td>hhh</td>
            <td>A+</td>
            <td>300</td>
            <td>Adrr</td>
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

export default AdminCurrBloodReq;
