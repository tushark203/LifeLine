import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar-cont">
      <div className="nav-left-section">
        <div className="nav-logo">
          <h1>LifeLine</h1>
        </div>
      </div>
      <div className="nav-right-section">
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to="services" smooth={true} offset={-260} duration={500}>
            Services
          </Link>
          <Link to={"contact-us"}>Contact Us</Link>
          <Link to={"/login"}>Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
