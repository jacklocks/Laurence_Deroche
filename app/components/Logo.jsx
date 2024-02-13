import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        className="h-2/3 lg:h-1/3 w-2/3 lg:w-1/3 mt-20"
      />
    </>
  );
};

export default Logo;
