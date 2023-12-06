// import React from 'react';

const EyeIcon = ({ showPassword, togglePasswordVisibility }) => {
  return (
    <div
      className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
      onClick={togglePasswordVisibility}
    >
      <svg
        className="h-6 w-6 text-gray-500 hover:text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {showPassword ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        ) : (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 12s3-3 5-5 10-5 10-5 5 2 5 5-3 5-5 5H7s-5-2-5-5z"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default EyeIcon;

