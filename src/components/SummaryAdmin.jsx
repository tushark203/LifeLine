import React from "react";
import "../styles/SummaryAdmin.css";
import BloodStorage from "./BloodStorage";
const SummaryAdmin = () => {
  return (
    <>
      <div className="admin-blood-storage-cont">
        <BloodStorage className="blood-str-admin" />
      </div>
      <div className="all-mkr-db-summary-cont">
        <div className="blood-req summ-card">
          <h1>Blood Requests</h1>
          <div className="blood-req-values summ-count">
            <div className="value-box summ-total-breq">
              <h3>Total </h3>
              <span id="summ-total-breq">200</span>
            </div>
            <div className="value-box summ-total-breq-app">
              <h3>Approved </h3>
              <span id="summ-total-breq-app">200</span>
            </div>
            <div className="value-box summ-total-breq-rej">
              <h3>Rejected</h3>
              <span id="summ-total-breq-rej">200</span>
            </div>
          </div>
        </div>
        <div className="donation-req summ-card">
          <h1>Donations </h1>
          <div className="donat-req-values summ-count">
            <div className="value-box summ-total-dbr">
              <h3>Total </h3>
              <span id="summ-total-dbr">200</span>
            </div>
            <div className="value-box summ-total-dbr-app">
              <h3>Approved </h3>
              <span id="summ-total-dbr-app">200</span>
            </div>
            <div className="value-box summ-total-dbr-rej">
              <h3>Rejected </h3>
              <span id="summ-total-dbr-rej">200</span>
            </div>
          </div>
        </div>
        <div className="total-user summ-card">
          <h1>Users </h1>
          <div className="donat-req-values summ-count">
            <div className="value-box summ-total-dbr">
              <h3>Total </h3>
              <span id="summ-total-dbr">200</span>
            </div>
            <div className="value-box summ-total-dbr-app">
              <h3>Patient </h3>
              <span id="summ-total-dbr-app">200</span>
            </div>
            <div className="value-box summ-total-dbr-rej">
              <h3>Donor </h3>
              <span id="summ-total-dbr-rej">200</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryAdmin;
