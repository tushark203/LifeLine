import React from "react";
import { Link } from "react-router-dom";
import "../styles/CheckAvailabiltyPage.css";
import Navbar from "./Navbar";
import BloodStorage from "./BloodStorage";
const CheckAvailabiltyPage = () => {
  return (
    <>
      <Navbar />
      <div className="check-availpage">
        <BloodStorage />
        <Link to={"/login"} className="make-req-ca-btn">
          Make Request
        </Link>
      </div>
    </>
  );
};

export default CheckAvailabiltyPage;
