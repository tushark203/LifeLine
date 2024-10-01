import React from "react";

import "../styles/BloodStorage.css";

const BloodStorage = () => {
  return (
    <>
      <div className="blood-sto-cont">
        <div className="blood-info-card">
          <h1 className="blood-type">A+</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
        <div className="blood-info-card">
          <h1 className="blood-type">B+</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
        <div className="blood-info-card">
          <h1 className="blood-type">O+</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
        <div className="blood-info-card">
          <h1 className="blood-type">AB+</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
        <div className="blood-info-card">
          <h1 className="blood-type">A-</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
        <div className="blood-info-card">
          <h1 className="blood-type">B-</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
        <div className="blood-info-card">
          <h1 className="blood-type">O-</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
        <div className="blood-info-card">
          <h1 className="blood-type">AB-</h1>
          <h4 className="blood-quant-cont">
            <span className="blood-quant">300</span>ml
          </h4>
        </div>
      </div>
    </>
  );
};

export default BloodStorage;
