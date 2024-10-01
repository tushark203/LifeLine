import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = ({ setActivecompo, role }) => {
  return (
    <div className="side-bar">
      {role === "patient" ? (
        <div className="sidebar-links">
          <Link
            onClick={() => {
              setActivecompo("make-request");
            }}
            className="side-bar-link"
          >
            Make Request
          </Link>
          <Link
            onClick={() => {
              setActivecompo("all-requests");
            }}
            className="side-bar-link"
          >
            All Requests
          </Link>
          <Link
            onClick={() => {
              setActivecompo("summary");
            }}
            className="side-bar-link"
          >
            Summary
          </Link>
          <Link to="/my-profile" className="side-bar-link">
            My Profile
          </Link>
        </div>
      ) : (
        ""
      )}
      {role === "donor" ? (
        <div className="sidebar-links">
          <Link
            onClick={() => {
              setActivecompo("donate-blood");
            }}
            className="side-bar-link"
          >
            Donate Blood
          </Link>
          <Link
            onClick={() => {
              setActivecompo("all-donation");
            }}
            className="side-bar-link"
          >
            All Donation
          </Link>
          <Link
            onClick={() => {
              setActivecompo("donation-summary");
            }}
            className="side-bar-link"
          >
            Summary
          </Link>
          <Link to="/my-profile" className="side-bar-link">
            My Profile
          </Link>
        </div>
      ) : (
        ""
      )}
      {role === "admin" ? (
        <div className="sidebar-links">
          <Link
            onClick={() => {
              setActivecompo("all-mkr-db-summary");
            }}
            className="side-bar-link"
          >
            All Summary
          </Link>
          <Link
            onClick={() => {
              setActivecompo("curr-blood-req");
            }}
            className="side-bar-link"
          >
            Blood Request
          </Link>
          <Link
            onClick={() => {
              setActivecompo("curr-don-req");
            }}
            className="side-bar-link"
          >
            Donation Request
          </Link>
          <Link
            onClick={() => {
              setActivecompo("blood-history");
            }}
            className="side-bar-link"
          >
            Blood Request History
          </Link>
          <Link
            onClick={() => {
              setActivecompo("donation-history");
            }}
            className="side-bar-link"
          >
            Donation History
          </Link>
          <Link
            onClick={() => {
              setActivecompo("patient-list");
            }}
            className="side-bar-link"
          >
            Patient List
          </Link>
          <Link
            onClick={() => {
              setActivecompo("donor-list");
            }}
            className="side-bar-link"
          >
            Donor List
          </Link>
          <Link
            onClick={() => {
              setActivecompo("blood-stock");
            }}
            className="side-bar-link"
          >
            Blood Stock
          </Link>
          <Link to="/my-profile" className="side-bar-link">
            My Profile
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBar;
