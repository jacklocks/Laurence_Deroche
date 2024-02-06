import React from "react";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div class="flex bg-turquoise top-0  h-20 flex-wrap justify-around relative">
      {<Logo/>}
      <div className="justify-between">
        <ul class=" flex gap-[50px] text-2xl items-center font-text uppercase">
          <li>{<Dropdown />}</li>
          <li className="flex rounded  transition-all hover:bg-green items-center p-2 mt-0 h-20 w-36% justify-center cursor-pointer ">Home</li>
          <li className="flex rounded  transition-all hover:bg-green items-center p-2 mt-0 h-20 w-52% justify-center cursor-pointer">À propos de moi</li>
          <li className="flex rounded  transition-all hover:bg-green items-center p-2 mt-0 h-20 w-36% justify-center cursor-pointer">contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
