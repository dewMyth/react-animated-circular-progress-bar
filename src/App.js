import React from "react";

import AnimatedProgressBar from "./AnimatedProgressBar";

import "./App.css";
import PleomaxEffect from "./PleomaxEffect";

const App = () => {
  return (
    <div>
      <PleomaxEffect />
      <h1>Animated Progress Bar</h1>
      <h2>React Circular Progressbar</h2>
      <div className="container">
        <div className="sub-container">
          <div className="ring">
            <AnimatedProgressBar />
          </div>
          <div className="node top-left">
            {/* flex row with two columns */}
            <div className="row">
              <div className="text">text</div>
              <div className="left circle"></div>
            </div>
          </div>
          <div className="node top-right">
            <div className="row">
              <div className="right circle"></div>
              <div className="text">text</div>
            </div>
          </div>
          <div className="node bottom-right">
            <div className="row">
              <div className="right circle"></div>
              <div className="text">text</div>
            </div>
          </div>
          <div className="node bottom-left">
            <div className="row">
              <div className="text">text</div>
              <div className="left circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
