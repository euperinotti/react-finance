"use client";
import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavbarItem } from "./Item";
import { NavbarProps } from "./types";

export const Navbar = ({ ...rest }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      {...rest}
      className={`w-full bg-blue-600 border-gray-200 flex items-center justify-between px-8 py-2 max-md:items-center max-md:flex-col max-md:gap-4 ${rest.className}`}
    >
      <div className="w-full flex items-center justify-between max-md:flex-row">
        <a href="#"></a>
        <HamburgerMenu onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="w-full max-md:hidden md:w-auto" id="navbar-default">
        <ul className="list-none flex items-center max-md:flex-col max-md:gap-0 max-md:p-2 max-md:bg-gray-100 max-md:rounded-md">
          <NavbarItem label="Home" href="/" isActive={true} />
          <NavbarItem label="About" href="/about" isActive={false} />
          <NavbarItem label="Login" href="/login" isActive={false} />
        </ul>
      </div>
      {isOpen && (
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="list-none flex items-center gap-14 max-md:flex-col max-md:gap-0 max-md:p-2 max-md:bg-blue-700 max-md:rounded-md">
            <NavbarItem label="Home" href="/" isActive={true} />
            <NavbarItem label="About" href="/about" isActive={false} />
            <NavbarItem label="Login" href="/login" isActive={false} />
          </ul>
        </div>
      )}
    </nav>
  );
};
