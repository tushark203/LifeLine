import React from "react";
import "../styles/Summary.css";
const Summary = () => {
  return (
    <div className="summary-cont">
      <div className="total-request summ-info">
        <h1>Total Requests</h1>
        <span className="total-req-count">200</span>
      </div>
      <div className="approved-request summ-info">
        <h1>Approved Requests</h1>
        <span className="approved-req-count">200</span>
      </div>
      <div className="rejected-request summ-info">
        <h1>Rejected requests</h1>
        <span className="rejected-req-count">200</span>
      </div>
    </div>
  );
};

export default Summary;
