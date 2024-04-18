import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[8vh] bg-[#050d1a] shadow-md ">
      <div className="flex items-center justify-between w-11/12 mx-auto h-full">
        <h1 className="flex-[0.6] cursor-pointer text-2xl text-white font-bold">
          Dasun
          <span className="text-red-500">Sathsara</span>
        </h1>
        {/* Use onClick to scroll to different sections */}
        <div className="nav-link" onClick={() => scrollToSection("Home")}>
          Home
        </div>
        <div className="nav-link" onClick={() => scrollToSection("About")}>
          About
        </div>
        <div className="nav-link" onClick={() => scrollToSection("Srvices")}>
          Srvices
        </div>
        <div className="nav-link" onClick={() => scrollToSection("projects")}>
          Projects
        </div>
        <div className="nav-link" onClick={() => scrollToSection("Blog")}>
          Blog
        </div>
        <div className="nav-link" onClick={() => scrollToSection("contact")}>
          Contact
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-8 h-8 md:hidden cursor-pointer text-red-500"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
