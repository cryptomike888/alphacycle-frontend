import React from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';

function App() {
  const handleEnterApp = () => {
    window.location.href = 'https://fwd-projector.streamlit.app'; // Update later if needed
  };

  return (
    <div className="App">
      <div className="spline-scene">
        <Spline scene="https://prod.spline.design/c6BuKAxc6em-tNsn/scene.splinecode" />
      </div>

      <div className="headline">
        <h1>Turning complexity into clarity.</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Macro tools for modern investors.</p>
        <button className="enter-btn" onClick={handleEnterApp}>
          Enter App
        </button>
      </div>
    </div>
  );
}

export default App;
