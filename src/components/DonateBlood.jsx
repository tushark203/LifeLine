import React from "react";
import "../styles/DonateBlood.css";
const DonateBlood = () => {
  return (
    <div className="donate-blood-box">
      <h1 className="db-heading">Donate blood</h1>
      <form action="" className="donate-blood-form">
        <div className="donate-blood-name db-input">
          <label> Name</label>
          <input type="text" defaultValue={"tuku"} required />
        </div>
        <div className="donate-blood-age db-input">
          <label>Age</label>
          <input type="number" defaultValue={"28"} required />
        </div>
        <div className="donate-blood-desease db-input">
          <label>Desease(if any)</label>
          <input type="text" />
        </div>
        <div className="donate-blood-contact db-input">
          <label>Contact</label>
          <input type="number" required />
        </div>
        <div className="donate-blood-blood-grp db-input">
          <label>Blood Group</label>
          <input type="text" defaultValue={"A+"} required />
        </div>

        <input
          type="submit"
          value={"Donate Blood"}
          className="donate-blood-button"
        />
      </form>
    </div>
  );
};

export default DonateBlood;
