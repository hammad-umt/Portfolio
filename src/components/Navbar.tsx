"use client";
import React from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "About", link: "about" },
  { id: 2, name: "Experience", link: "experience" },
  { id: 3, name: "Projects", link: "projects" },
  { id: 4, name: "Skills", link: "skills" },
  { id: 5, name: "Education", link: "education" },
  { id: 6, name: "Contact", link: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    }
    return () => {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    };
  }, [menuOpen]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f6]/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => handleScroll("home")}
        className="font-[family-name:var(--font-serif)] text-xl md:text-2xl tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
        aria-label="Go to top"
      >
        Hammad<span className="text-[var(--accent)]">.</span>
      </button>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-8 items-center">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <button
              onClick={() => handleScroll(nav.link)}
              className="link-underline text-[var(--text-muted)] text-sm font-medium hover:text-[var(--text-primary)] transition-colors duration-300"
            >
              {nav.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="/resume/Hammad-Ur-Rehman-Resume.pdf"
        download="Hammad-Ur-Rehman-Resume.pdf"
        className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-medium rounded-full hover:bg-[var(--accent)] transition-colors duration-300"
      >
        Resume
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
        </svg>
      </a>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[var(--bg-primary)] border-l border-[var(--border)] transform transition-transform duration-300 lg:hidden z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
            <span className="font-[family-name:var(--font-serif)] text-xl text-[var(--text-primary)]">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col grow p-6 gap-1">
            {navLinks.map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleScroll(nav.link)}
                className="w-full text-left text-[var(--text-secondary)] text-base font-medium hover:text-[var(--accent)] transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-[var(--accent-light)]"
              >
                {nav.name}
              </button>
            ))}
          </div>

          {/* Mobile Resume Button */}
          <div className="p-6 border-t border-[var(--border)]">
            <a
              href="/resume/Hammad-Ur-Rehman-Resume.pdf"
              download="Hammad-Ur-Rehman-Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-sm rounded-full hover:bg-[var(--accent)] transition-colors duration-300"
            >
              Download Resume
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
