import React from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="spline-scene">
        <Spline scene="https://prod.spline.design/c6BuKAxc6em-tNsn/scene.splinecode" />
      </div>
      <h1 className="headline">Welcome to AlphaCycle</h1>
      <button className="enter-btn" onClick={() => navigate("/hub")}>
        🚀 Enter the App
      </button>
    </div>
  );
};

export default LandingPage;
