// components/ui/Progress.js
import React from 'react';

interface ProgressProps {
    value: number; 
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  const progressStyle = {
    width: `${value}%`,
    backgroundColor: '#4CAF50', // Green color (you can customize this)
    height: '100%',
    borderRadius: '4px', // Optional: add rounded corners
  };

  return (
    <div className="bg-gray-300 h-4 rounded-md overflow-hidden">
      <div style={progressStyle}></div>
    </div>
  );
};

export default Progress;
