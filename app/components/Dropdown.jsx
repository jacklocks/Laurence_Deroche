"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-white  p-2 mt-0 h-20 w-36% outline-none flex rounded  transition-all hover:bg-green items-center font-text uppercase">
        Prestations
      </button>

      {isDropdownOpen && (
        <div
          className="absolute z-10 bg-black h-52 w-[10.7rem] rounded lowercase"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 text-xl text-white mt-1 divide-y divide-gray divide-slate-700">
            <a className="h-12 flex items-center justify-center" href="/">
              Reiki
            </a>
            <a className="h-12 flex items-center justify-center" href="/">
              Massage
            </a>
            <a className="h-12 flex items-center justify-center" href="/">
              Numérologie
            </a>
            <a className="h-12 flex items-center justify-center" href="/">
              Relaxation
            </a>
          </div>
          <img src="/solutions.jpg" alt="" />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
