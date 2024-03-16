import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-progressbar rounded-full">
      <div className="h-2 bg-progressbarline rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;