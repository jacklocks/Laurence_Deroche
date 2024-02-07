"use client";
import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Dropdown = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Menu>
      <MenuHandler>
        <Button className="flex rounded  transition-all hover:bg-green items-center p-2 mt-0 h-20 w-36% justify-center cursor-pointer font-text text-2xl uppercase font-normal shadow-none ">
          {" "}
          Prestations
        </Button>
      </MenuHandler>
      <MenuList className="border-none">
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Soins énergétiques
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-4 w-4 ml-1 transition-transform stroke-black ${
                  openMenu ? "rotate-90" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Reiki</MenuItem>
            <MenuItem>LaHoChi</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Hypnose</MenuItem>
        <MenuItem>Massage Twina</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
