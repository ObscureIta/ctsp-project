import React from 'react';

interface ArrowLeftProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ className, width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.707 4.293a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowLeft;
