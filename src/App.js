import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ChangingProgressProvider from "./ChangingProgressProvider";
import GradientSVG from "./GradientSVG";

const App = () => {
  const idCSS = "gradientColors";
  return (
    <div>
      <h1>Animated Progress Bar</h1>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "1000px", height: "1000px" }}>
          <GradientSVG />
          <ChangingProgressProvider values={[0, 25, 50, 75, 100]}>
            {(value) => (
              <CircularProgressbar
                strokeWidth={8}
                id="curve"
                value={value}
                // text={`${value}%`}  // If you want to show the percentage
                circleRatio={1}
                styles={buildStyles({
                  rotation: 7 / 8, // Start from this size of potion point, Ex: 1/8 = 45 degree, 7/8 = 315 degree(-45 degree) -> Exactly the same point we need, if u want to satrt from bottom, just put 1/2 = 180 degree
                  strokeLinecap: "round",
                  pathColor: `url(#${idCSS})`,
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
      </div>
    </div>
  );
};

export default App;
