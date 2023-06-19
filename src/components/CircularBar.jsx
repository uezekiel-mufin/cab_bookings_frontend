import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MultiColorProgressBar = () => {
  const progress = 100; // The progress value (percentage)

  // Define an array of colors for each segment
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#212121'];

  // Calculate the size and stroke width of the progress bar
  const size = 100;
  const strokeWidth = 20;

  // Calculate the individual segment lengths based on the progress value
  const segmentLengths = colors.map(
    (color) => (progress / colors.length) * color.length,
  );

  // Create an array of buildStyles configurations for each segment
  const segmentStyles = colors.map((color, index) => ({
    pathColor: color,
    trailColor: '#d6d6d6',
    strokeWidth,
    trailWidth: strokeWidth,
    rotation: -90,
    strokeLinecap: 'butt',
    pathTransitionDuration: 0.5,
    pathTransition: 'none',
    ...(index > 0 && {
      pathStart: segmentLengths
        .slice(0, index)
        .reduce((sum, length) => sum + length, 0),
    }),
    path: {
      transition: 'stroke-dashoffset 0.5s ease 0s',
      strokeLinecap: 'butt',
      transformOrigin: 'center center',
    },
  }));

  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbar
        value={progress}
        strokeWidth={strokeWidth}
        styles={buildStyles(segmentStyles)}
      />
    </div>
  );
};

export default MultiColorProgressBar;
