import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        className="h-1/3 w-1/3 m-0"
      />
    </>
  );
};

export default Logo;
