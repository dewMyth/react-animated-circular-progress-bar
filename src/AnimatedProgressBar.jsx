import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import GradientSVG from "./GradientSVG";

const AnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const idCSS = "gradientColors";

  return (
    <>
      <GradientSVG />
      <CircularProgressbar
        value={progress}
        circleRatio={1}
        styles={buildStyles({
          rotation: 7 / 8,
          strokeLinecap: "round",
          trailColor: "#eee",
          pathColor: `url(#${idCSS})`,
        })}
      />
    </>
  );
};

export default AnimatedProgressBar;
