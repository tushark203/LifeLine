import React, { Fragment, useState } from "react";
import "../styles/Register.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Register = ({ Role, setRole }) => {
  console.log(Role);
  const registerSubmit = () => {
    console.log("submitted");

    setRole("patient");
  };
  const roleSettiing = () => {
    setRole("donor");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="register-cont">
        <div className="register-head-div">
          <div className="register-headings">
            <h1>Register</h1>
            <span className="register-role">
              {Role !== "donor" ? "as a Patient" : "as a Donor"}
            </span>
          </div>
          {Role === "donor" ? (
            ""
          ) : (
            <Link
              className="reg-bdonerBtn"
              to={"/register"}
              onClick={roleSettiing}
            >
              Be A Donor
            </Link>
          )}
        </div>
        <div className="register-form-box">
          <form action="" className="register-form" onSubmit={registerSubmit}>
            <div className="register-row">
              <div className="register-first-name register-col">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="register-last-name register-col">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>
            <div className="register-row">
              <div className="register-age register-col">
                <label>Age</label>
                <input type="text" required />
              </div>
              <div className="register-gender register-col">
                <label>Gender</label>
                <select name="gender">
                  <option>Please Select</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                </select>
              </div>
            </div>

            <div className="register-row">
              <div className="register-blood-grp register-col">
                <label>Blood Group</label>

                <select name="bloodgroup">
                  <option>Please Select</option>
                  <option value="">A+</option>
                  <option value="">A-</option>
                  <option value="">B+</option>
                  <option value="">B-</option>
                  <option value="">O+</option>
                  <option value="">O-</option>
                  <option value="">AB+</option>
                  <option value="">AB-</option>
                </select>
              </div>
              <div className="register-email register-col">
                <label>Email</label>
                <input type="email" required />
              </div>
            </div>
            <div className="register-row">
              <div className="register-phone register-col">
                <label>Phone No.</label>
                <input type="tel" pattern="[0-9]{10}" required />
              </div>
              <div className="register-addrr register-col">
                <label>Address</label>
                <input type="text" required />
              </div>
            </div>
            {Role !== "donor" ? (
              <div className="register-row">
                <div className="register-doc-name register-col">
                  <label>Disease</label>
                  <input type="text" required />
                </div>
                <div className="register-addrr register-col">
                  <label>Doctor Name</label>
                  <input type="text" required />
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="register-row">
              <div className="register-username register-col">
                <label>Username</label>
                <input type="text" required />
              </div>
              <div className="register-password register-col">
                <label>Password</label>
                <input type="password" required />
              </div>
            </div>
            <input
              type="submit"
              value={"Register"}
              className="register-button"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
