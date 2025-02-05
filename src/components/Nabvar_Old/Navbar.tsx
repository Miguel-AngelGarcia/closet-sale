import React from "react";
import Image from "next/image";
import { navbarLinks } from "@/constants";
import { StickyNac } from ".";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper nav-expand bg-white">
      <div className="navbar-cont">
        <a>
          <Image src="./tumbao.svg" alt="logo" height={80} width={160} />
        </a>
        <div className="navbarLinks">
          {navbarLinks.map((navlink) => (
            <ul key={navlink.name}>
              <a href={navlink.link} className={`nav-item ${navlink.class}`}>
                {navlink.name}
              </a>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
