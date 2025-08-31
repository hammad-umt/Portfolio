"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Skills", link: "#skills" },
  { id: 4, name: "Education", link: "#education" },
  { id: 5, name: "Projects", link: "#projects" },
  { id: 6, name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-20 py-3 shadow bg-white">
      {/* Logo / Brand */}
      <a
        href="#home"
        className="flex items-center text-2xl font-bold tracking-wider text-gray-800 hover:text-[#F4B400] transition-colors"
      >
        <Image
          className="rounded-full"
          src="/file.svg"
          width={45}
          height={45}
          alt="logo"
        />
        <span className="text-[#F4B400]">H</span>ammad
      </a>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-10 font-bold tracking-wide">
        {navLinks.map((nav) => (
          <li key={nav.id} className="relative group">
            <a
              href={nav.link}
              className="text-gray-800 transition-transform duration-200 transform group-hover:-translate-y-[3px] hover:text-[#F4B400]"
            >
              {nav.name}
            </a>
            {/* underline animation */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F4B400] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-800 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#F4B400] shadow-lg transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-6 mt-20 px-6">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={nav.link}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-bold hover:underline"
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
