import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Services.css";
const Services = ({ setRole }) => {
  const navigate = useNavigate();
  return (
    <div className="services ser-cont-outside">
      <h1 className="serv-heading">Our Services</h1>
      <div className="serv-cont">
        <div className="serv-cont-inner">
          <div className="serv-para">
            <h1>
              Blood Packet <br /> Delivery
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error
              <br />
              et aspernatur, iste nisi, non totam explicabo praesentium, <br />
              nesciunt soluta voluptatem repellendus officia <br />
              fugiat fugit. Tempora quas aliquid quibusdam iure.
            </p>
          </div>
          <div className="serv-img"></div>
        </div>
        <div className="serv-cont-inner">
          <div className="serv-img"></div>
          <div className="serv-para">
            <h1>
              Blood <br /> Donation
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error
              <br />
              et aspernatur, iste nisi, non totam explicabo praesentium, <br />
              nesciunt soluta voluptatem repellendus officia <br /> fugiat
              fugit. Tempora quas aliquid quibusdam iure.
            </p>
            <Link
              className="serv-bdonerBtn"
              to={"/register"}
              onClick={() => {
                setRole("donor");
              }}
            >
              Be A Donor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
