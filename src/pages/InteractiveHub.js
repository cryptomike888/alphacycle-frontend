import React from "react";
import Spline from "@splinetool/react-spline";
import "../App.css";

const InteractiveHub = () => {
  return (
    <div className="App">
      <div className="spline-scene">
        <Spline scene="https://prod.spline.design/03bCro5oQSJMQCbj/scene.splinecode" />
      </div>
      <h1 className="headline">🧠 Interactive Hub</h1>
    </div>
  );
};

export default InteractiveHub;
