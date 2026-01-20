"use client";
import React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "About", link: "about" },
  { id: 3, name: "Skills", link: "skills" },
  { id: 4, name: "Education", link: "education" },
  { id: 5, name: "Projects", link: "projects" },
  { id: 6, name: "Contact", link: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Scroll function
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-20 py-4 shadow-md bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
      {/* Logo */}
      <button
        onClick={() => handleScroll("home")}
        className="flex items-center gap-3 text-xl md:text-2xl font-bold tracking-wider text-slate-900 hover:text-indigo-600 transition-all duration-300 group"
      >
        <div className="bg-linear-to-br from-indigo-600 to-cyan-500 p-2.5 rounded-lg group-hover:shadow-lg group-hover:shadow-indigo-300/50 transition-all transform group-hover:scale-110">
          <Image
            className="rounded"
            src="/file.svg"
            width={28}
            height={28}
            alt="logo"
          />
        </div>
        <span className="hidden sm:inline text-slate-900">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500 font-bold">H</span><span className="font-semibold">ammad</span>
        </span>
      </button>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-1 font-medium tracking-tight">
        {navLinks.map((nav) => (
          <li key={nav.id} className="relative group">
            <button
              onClick={() => handleScroll(nav.link)}
              className="text-slate-700 text-base px-4 py-2 transition-all duration-200 group-hover:text-indigo-600 relative hover:bg-slate-100/60 rounded-lg"
            >
              {nav.name}
              <span className="absolute left-0 bottom-1 w-0 h-1 bg-linear-to-r from-indigo-600 to-cyan-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="https://github.com/hammad-umt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-400/50 transition-all transform hover:scale-105 active:scale-95"
        >
          GitHub
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-slate-900 hover:text-indigo-600 transition-colors p-2 hover:bg-slate-100 rounded-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 lg:hidden border-l border-slate-200/50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
            <h3 className="text-lg font-bold text-slate-900">Menu</h3>
            <button onClick={() => setMenuOpen(false)} className="text-slate-900 hover:text-indigo-600">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col grow p-6 gap-2">
            {navLinks.map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleScroll(nav.link)}
                className="w-full text-left text-slate-700 text-base font-semibold hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-indigo-600"
              >
                {nav.name}
              </button>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-slate-200/50">
            <a
              href="https://github.com/hammad-umt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              View GitHub
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
