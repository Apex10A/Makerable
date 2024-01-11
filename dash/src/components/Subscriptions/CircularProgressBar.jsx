// src/components/CircularProgressBar.jsx
import React from 'react';

const CircularProgressBar = ({ progress }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100">
      <circle
        className="progress-ring__circle"
        strokeWidth="4"
        fill="blue"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        className="progress-ring__path"
        strokeWidth="4"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
          stroke: `conic-gradient(
            #3b82f6 ${progress}%, 
            blue 0 ${progress}%
          )`,
        }}
      />
    </svg>
  );
};

export default CircularProgressBar;
