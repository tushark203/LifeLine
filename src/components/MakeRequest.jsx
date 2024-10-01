import React from "react";
import "../styles/MakeRequest.css";
const MakeRequest = () => {
  return (
    <div className="make-request-box">
      <h1 className="mkr-heading">Make Request</h1>
      <form action="" className="make-req-form">
        <div className="mk-request-name mkr-input">
          <label>Patient Name</label>
          <input type="text" defaultValue={"tuku"} required />
        </div>
        <div className="mk-request-age mkr-input">
          <label>Patient Age</label>
          <input type="number" defaultValue={"28"} required />
        </div>
        <div className="mk-request-addr mkr-input">
          <label>Delivery Address</label>
          <input type="text" defaultValue={"adrr"} required />
        </div>
        <div className="mk-request-contact mkr-input">
          <label>Contact No.</label>
          <input type="number" defaultValue={"2878543423"} required />
        </div>
        <div className="mk-request-desease mkr-input">
          <label>Desease/Reason</label>
          <input type="text" defaultValue={"desease"} required />
        </div>
        <div className="mk-request-blood-grp mkr-input">
          <label>Blood Group</label>
          <input type="text" defaultValue={"A+"} required />
        </div>
        <div className="mk-request-blood mkr-input">
          <label>Requirement (ml)</label>
          <input type="number" required />
        </div>
        <input type="submit" value={"Request"} className="make-req-button" />
      </form>
    </div>
  );
};

export default MakeRequest;
