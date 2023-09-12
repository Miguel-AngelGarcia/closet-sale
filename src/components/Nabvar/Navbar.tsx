import React from "react";
import Image from "next/image";

const Navbar = () => {
  const navbarLinks = [
    {
      name: "women",
      link: "/women",
      class: "uln b",
    },
    {
      name: "men",
      link: "/men",
      class: "uln b",
    },
    {
      name: "designers",
      link: "/designers",
      class: "uln b",
    },
    {
      name: "search",
      link: "/",
      class: "tool uln g",
    },
    {
      name: " my account",
      link: "/account",
      class: "tool uln g",
    },
    {
      name: "cart (0)",
      link: "/cart",
      class: "tool uln g",
    },
  ];

  return (
    <nav className="navbar-wrapper nav-expand bg-white">
      <div className="navbar-cont">
        <a>
          <Image src="./next.svg" alt="logo" height={80} width={160} />
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
