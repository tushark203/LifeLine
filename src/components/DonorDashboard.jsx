import React, { useState } from "react";
import "../styles/DonorDashboard.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import DonateBlood from "./DonateBlood";
import Summary from "./Summary";
import AllDonation from "./AllDonation";
import Smmarydonation from "./Smmarydonation";
const DonorDashboard = () => {
  const role = "donor";
  const [activeCompo, setActivecompo] = useState("donate-blood");
  const renderCompo = () => {
    switch (activeCompo) {
      case "donate-blood":
        return <DonateBlood />;
      case "donation-summary":
        return <Smmarydonation />;
      case "all-donation":
        return <AllDonation />;
      default:
        return <DonateBlood />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="donor-dashboard">
        <SideBar setActivecompo={setActivecompo} role={role} />

        {renderCompo()}
      </div>
    </>
  );
};

export default DonorDashboard;
