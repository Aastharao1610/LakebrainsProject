// import React,{useState}from 'react';

  
// const LanguageSelector = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   }
//   return (
//     <div className="relative">
//       <div onClick={toggleDropdown} className="absolute top-0 text-black mt-0 right-0 p-2 border rounded-md cursor-pointer">
//         Language ▼
//       </div>
//       <div className={`absolute ${isDropdownOpen ? '' : 'hidden'} mt-1 p-2 border rounded-md bg-white`}>
//         <select className="w-full">
//         <option value="language">language</option>
//           <option value="english">English</option>
//           <option value="hindi">Hindi</option>
//           <option value="German">German</option>
//           <option value="French">French</option>
//           <option value="Spanish">Spanish</option>
//         </select>
//       </div>
//     </div>

//   );
// };

// export default LanguageSelector;

import React, { useState } from 'react';

// LanguageSelector component
const LanguageSelector = () => {
  // State to manage whether the dropdown is open or closed
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Trigger for the dropdown */}
      <div onClick={toggleDropdown} className="absolute top-0 text-black mt-0 right-0 p-2 border rounded-md cursor-pointer">
        Language ▼
      </div>

      {/* Dropdown content (conditionally rendered based on isDropdownOpen) */}
      {isDropdownOpen && (
        <div className="absolute mt-1 p-2 border rounded-md bg-white">
          {/* Language selection dropdown */}
          <select className="w-full">
            <option value="language" disabled> Language ▼</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
