"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content — 7 cols */}
          <div
            className={`lg:col-span-7 space-y-8 ${
              mounted ? "animate-reveal-left" : "opacity-0"
            }`}
          >
            {/* Availability Badge */}
            <div className="flex items-center gap-2.5 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-[var(--text-muted)] font-medium tracking-wide">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal leading-[1.05] tracking-tight">
                <span className="text-[var(--text-primary)]">Hammad</span>
                <br />
                <span className="italic text-[var(--accent)]">Ur Rehman</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] font-[family-name:var(--font-inter)] font-light max-w-xl leading-relaxed">
                Full Stack Developer crafting production-ready web applications
                with{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  ASP.NET Core
                </span>
                ,{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  MERN Stack
                </span>
                , &{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  Next.js
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-full hover:bg-[var(--accent)] transition-colors duration-300 text-sm text-center"
              >
                View My Work
              </button>
              <a
                href="/resume/Hammad-Ur-Rehman-Resume.pdf"
                download="Hammad-Ur-Rehman-Resume.pdf"
                className="px-7 py-3 border border-[var(--border-strong)] text-[var(--text-primary)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 text-sm text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/hammad-umt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a
                href="mailto:hammadurrehmanse@gmail.com"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <div className="w-px h-5 bg-[var(--border-strong)]" />
              <span className="text-sm text-[var(--text-faint)]">
                Lahore, Pakistan
              </span>
            </div>
          </div>

          {/* Right: Profile Image — 5 cols */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end ${
              mounted ? "animate-reveal-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-[22rem] md:h-[26rem]">
              {/* Accent border offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[var(--accent)]/20" />
              <Image
                src="/MyImage.png"
                alt="Hammad Ur Rehman — Full Stack Developer"
                width={400}
                height={480}
                priority
                className="relative w-full h-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-300 animate-bounce"
            aria-label="Scroll to About section"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
