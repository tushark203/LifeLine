import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import CheckAvailabiltyPage from "./components/CheckAvailabiltyPage";
import PatientDashboard from "./components/PatientDashboard";
import MakeRequest from "./components/MakeRequest";
import DonorDashboard from "./components/DonorDashboard";
import AdminDashboard from "./components/AdminDashboard";
const App = () => {
  const [role, setRole] = useState("patient"); //for registration

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setRole={setRole} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={<Register Role={role} setRole={setRole} />}
        />
        <Route path="/available" element={<CheckAvailabiltyPage />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
