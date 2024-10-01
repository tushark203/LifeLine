import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";

const Home = ({ setRole }) => {
  return (
    <div className="home-cont">
      <Navbar />
      <Hero />
      <Services setRole={setRole} />
      <Footer />
    </div>
  );
};

export default Home;
