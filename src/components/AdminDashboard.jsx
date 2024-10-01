import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import SummaryAdmin from "./SummaryAdmin";
import AdminCurrBloodReq from "./AdminCurrBloodReq";
import AdminCurrDonation from "./AdminCurrDonation";
import DonorList from "./DonorList";
import PatientList from "./PatientList";
import DonateBloodHistory from "./DonateBloodHistory";
import BloodRequestHistory from "./BloodRequestHistory";
import ManageBloodStock from "./ManageBloodStock";

const AdminDashboard = () => {
  const role = "admin";
  const [activeCompo, setActivecompo] = useState("all-mkr-db-summary");
  const renderCompo = () => {
    switch (activeCompo) {
      case "all-mkr-db-summary":
        return <SummaryAdmin />;
      case "curr-blood-req":
        return <AdminCurrBloodReq />;
      case "curr-don-req":
        return <AdminCurrDonation />;
      case "donor-list":
        return <DonorList />;
      case "patient-list":
        return <PatientList />;
      case "donation-history":
        return <DonateBloodHistory />;
      case "blood-history":
        return <BloodRequestHistory />;
      case "blood-stock":
        return <ManageBloodStock />;
      default:
        return <SummaryAdmin />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <SideBar setActivecompo={setActivecompo} role={role} />

        {renderCompo()}
      </div>
    </>
  );
};

export default AdminDashboard;
