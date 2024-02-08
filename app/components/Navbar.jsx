import React from "react";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-screen  px-5 lg:px-64  bg-turquoise flex">
        {/* {<Logo />} */}
        <ul className="hidden md:flex space-x-10  w-10/12  justify-around">
          <li className="flex rounded  transition-all hover:bg-green items-center p-2 cursor-pointer font-navbar  font-bold text-xl uppercase tracking-wider text-nav">
            <Link href="/">Accueil</Link>
          </li>
          <li>{<Dropdown />}</li>
          <li className="flex rounded  transition-all hover:bg-green items-center p-2 cursor-pointer font-navbar font-bold text-xl uppercase tracking-wider text-nav">
            <Link href="/histoire">Mon histoire</Link>
          </li>
          <li className="flex rounded  transition-all hover:bg-green items-center p-2 cursor-pointer font-navbar font-bold text-xl uppercase tracking-wider text-nav">
            <Link href="/contact">Contact</Link>
          </li>
          <li className=" flex items-center font-text text-xl text-black uppercase absolute ml-1 top-3 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="text-black"
              className="w-5 h-5 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd "
              />
            </svg>
            06 89 34 42 69
          </li>
        </ul>
        <div></div>
        <button className="space-y-1 group md:hidden py-2">
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>

          <div className="bg-turquoise w-screen pb-10  absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end z-10">
            <button className="px-10 py-8 relative ml-auto">
              <span className="w-6 h-1 rotate-45 absolute bg-white"></span>
              <span className="w-6 h-1 -rotate-45 absolute bg-white"></span>
            </button>
            <span className="flex justify-center w-full py-4">Accueil</span>
            <span className="flex justify-center w-full py-4">Prestations</span>
            <span className="flex justify-center w-full py-4">
              Mon histoire
            </span>
            <span className="flex justify-center w-full py-4">Contact</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;
