import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        className="size-56 flex  absolute left-0  top-0 z-10 rounded-full mt-10 ml-20"
      />
    </>
  );
};

export default Logo;
