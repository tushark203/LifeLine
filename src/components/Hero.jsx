import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import WaterDrop from "@mui/icons-material/WaterDrop";
import bg from "../assets/bg1.jpg";
const Hero = () => {
  return (
    <div className="hero-cont">
      <div className="hero-logo">
        <h1 className="hero-logo-1">Life</h1>
        <h1 className="hero-logo-2">Line</h1>
        <WaterDrop className="water-drop" />
        <WaterDrop className="water-drop wd-1" />
        <WaterDrop className="water-drop wd-2" />
        <WaterDrop className="water-drop wd-3" />
      </div>
      <div className="hero-buttons">
        <Link to="/available">Check Availability</Link>
        <Link to="/login">Make Request</Link>
      </div>
      <img src={bg} alt="" className="hero-bg-img" />
    </div>
  );
};

export default Hero;
