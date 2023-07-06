import React from "react";
import harryPotterImage from "../components/images/harry-potter.jpg.jpg";

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Home Page</h2>
      <img src={harryPotterImage} alt="Harry Potter" className="home-image" />
      <h3 className="home-subtitle">Harry Potter</h3>
    </div>
  );
}

export default Home;
