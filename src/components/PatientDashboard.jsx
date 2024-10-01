import React, { useState } from "react";
import "../styles/PatientDashboard.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import MakeRequest from "./MakeRequest";
import Summary from "./Summary";
import AllRequests from "./AllRequests";
const PatientDashboard = () => {
  const role = "patient";
  const [activeCompo, setActivecompo] = useState("make-request");
  const renderCompo = () => {
    switch (activeCompo) {
      case "summary":
        return <Summary />;
      case "make-request":
        return <MakeRequest />;
      case "all-requests":
        return <AllRequests />;
      default:
        return <MakeRequest />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="patient-dashboard">
        <SideBar setActivecompo={setActivecompo} role={role} />

        {renderCompo()}
      </div>
    </>
  );
};

export default PatientDashboard;
