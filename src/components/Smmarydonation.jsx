import React from "react";
import "../styles/Smmarydonation.css";
const Smmarydonation = () => {
  return (
    <div className="summary-donation-cont">
      <div className="total-donations summ-info">
        <h1>Total Donations</h1>
        <span className="total-donations-count">200</span>
      </div>
      <div className="approved-donations summ-info">
        <h1>Approved Donations</h1>
        <span className="approved-donations-count">200</span>
      </div>
      <div className="rejected-donations summ-info">
        <h1>Rejected Donations</h1>
        <span className="rejected-donations-count">200</span>
      </div>
    </div>
  );
};

export default Smmarydonation;
