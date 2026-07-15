"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)] px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left */}
        <div className="flex items-center gap-1.5">
          <span className="font-[family-name:var(--font-serif)] text-lg text-[var(--text-primary)]">
            Hammad<span className="text-[var(--accent)]">.</span>
          </span>
          <span className="text-[var(--text-faint)] text-sm mx-2">—</span>
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Built with Next.js
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hammad-umt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
