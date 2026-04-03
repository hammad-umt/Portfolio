"use client";
import React from "react";
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
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 backdrop-blur-md bg-black/60 border-b border-white/10">
      {/* Logo */}
      <button
        onClick={() => handleScroll("home")}
        className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
      >
        Hammad
      </button>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-8 font-medium">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <button
              onClick={() => handleScroll(nav.link)}
              className="text-gray-300 text-sm hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-indigo-500"
            >
              {nav.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <button
        onClick={() => handleScroll("contact")}
        className="hidden lg:inline-flex px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
      >
        Hire Me
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-300 hover:text-white transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-black/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <button
              onClick={() => handleScroll("home")}
              className="text-xl font-bold text-indigo-400"
            >
              Hammad
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col grow p-6 gap-3">
            {navLinks.map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleScroll(nav.link)}
                className="w-full text-left text-gray-300 text-sm font-medium hover:text-white hover:translate-x-1 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5"
              >
                {nav.name}
              </button>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-white/10">
            <button
              onClick={() => handleScroll("contact")}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-full transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
