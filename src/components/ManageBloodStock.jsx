import React from "react";
import "../styles/ManageBloodStock.css";
import BloodStorage from "./BloodStorage";
const ManageBloodStock = () => {
  return (
    <div className="admin-manage-blood">
      <BloodStorage />
      <div className="update-stock">
        <form action="" className="update-stock-form">
          <div className="admin-blood-grp ">
            <label>Blood Group</label>

            <select name="bloodgroup">
              <option>Please Select</option>
              <option value="">A+</option>
              <option value="">A-</option>
              <option value="">B+</option>
              <option value="">B-</option>
              <option value="">O+</option>
              <option value="">O-</option>
              <option value="">AB+</option>
              <option value="">AB-</option>
            </select>
          </div>
          <div className="admin-blood-grp blood-unit">
            <label>Unit (ml)</label>
            <input type="number" required />
          </div>
          <input
            type="submit"
            value={"Update"}
            className="update-stock-button"
          />
        </form>
      </div>
    </div>
  );
};

export default ManageBloodStock;
