"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center  bg-green m-0  inset-x-0 bottom-0">
      <Typography
        color="blue-gray"
        className="font-navbar font-semibold ml-5 font-text"
      >
        &copy; 2024 Éric Castets
      </Typography>
      {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-title text-2xl hover:scale-110 transition mr-20"
          >
            Mon histoire
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-title text-2xl hover:scale-110 transition mr-20"
          >
            Contact
          </Typography>
        </li>
      </ul> */}
    </footer>
  
  );
};

export default Footer;
