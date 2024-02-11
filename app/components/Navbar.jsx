"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-screen h-24 px-5 lg:px-64 flex border-b border-blue-50 bg-teal relative">
        <ul className="hidden lg:flex space-x-10 w-screen lg:w-10/12 justify-around text-white">
          <li className="flex rounded transition-all p-2 h-20 items-center cursor-pointer font-title font-bold text-xl uppercase tracking-widest text-nav hover:scale-110">
            <Link className="h-20 flex flex-col justify-center" href="/">
              Accueil
            </Link>
          </li>
          <li>
            <Dropdown />
          </li>
          <li className="flex rounded transition-all p-2 h-20 items-center cursor-pointer font-title font-bold text-xl uppercase tracking-widest text-nav hover:scale-110">
            <Link
              className="h-20 flex flex-col justify-center"
              href="/histoire"
            >
              Mon histoire
            </Link>
          </li>
          <li className="flex rounded transition-all p-2 h-20 items-center cursor-pointer font-title font-bold text-xl uppercase tracking-widest text-nav hover:scale-110">
            <Link className="h-20 flex flex-col justify-center" href="/contact">
              Contact
            </Link>
          </li>
          <li className="flex items-center font-title text-xl text-black uppercase absolute ml-1 top-3 right-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="text-black"
              className="w-5 h-5 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
              />
            </svg>
            06 89 34 42 69
          </li>
        </ul>
        <div className="lg:hidden absolute top-3 right-5">
          <button
            onClick={handleToggle}
            className="block text-3xl text-white focus:outline-none"
          >
            &#9776;
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-teal w-full absolute top-24 left-0 z-10">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li className="text-white font-title tracking-widest uppercase font-bold py-2">
                <Link href="/">Accueil</Link>
              </li>
              <li className="text-white font-title tracking-widest uppercase font-bold py-2">
                <Link href="/soins">Soins énergétiques</Link>
              </li>
              <li className="text-white font-title tracking-widest uppercase font-bold py-2">
                <Link href="/hypnose">Hypnose</Link>
              </li>
              <li className="text-white font-title tracking-widest uppercase font-bold py-2">
                <Link href="/massage">Massage ventouses Tui Na</Link>
              </li>
              <li className="text-white font-title tracking-widest uppercase font-bold py-2">
                <Link href="/histoire">Mon histoire</Link>
              </li>
              <li className="text-white font-title tracking-widest uppercase font-bold py-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
