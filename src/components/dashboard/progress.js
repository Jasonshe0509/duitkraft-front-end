import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-progressbar rounded-full">
      <div className="h-2 bg-progressbarline rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const ProgressBar2 = ({ progress2 }) => {
  return (
    <div className="w-full bg-progressbar2 rounded-full">
      <div
        className={`flex h-2 flex-col justify-center bg-progressbarline2 rounded-full overflow-hidden text-fontColor text-center whitespace-nowrap`}
        style={{ width: `${progress2}%` }} // Corrected "nwidth" to "width"
      >
        {progress2}%
      </div>
    </div>
  );
};     
export default ProgressBar;
export { ProgressBar2 };
