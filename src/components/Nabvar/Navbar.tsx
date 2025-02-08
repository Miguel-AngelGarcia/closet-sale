import React from "react";
import Image from "next/image";
import { navbarLinks } from "@/constants";
import { NavLinks, StickyNac } from ".";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper nav-expand bg-white">
      <div className="navbar-cont">
        <a>
          <Image
            src="./tumbao.svg"
            alt="logo"
            height={80}
            width={160}
            className="tl-logo"
          />
        </a>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
