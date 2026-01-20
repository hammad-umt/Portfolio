"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const socialLinks = [
  {
    href: "https://github.com/hammad-umt",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/hmad.kh.k",
    icon: faFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/hammad._.khattak/",
    icon: faInstagram,
    label: "Instagram",
  },
];
const professionList = [
  "Frontend Web Developement",
  "Flutter Developement",
  "React JS Development",
  "Next JS Development",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [speed, setSpeed] = useState(100); // typing speed (default)
  useEffect(() => {
    const handleTyping = () => {
      const current = professionList[loopIndex % professionList.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(updatedText);
      // Adjust speed
      if (isDeleting) {
        setSpeed(50); // faster delete
      } else {
        setSpeed(80); // faster typing
      }
      // When word completes
      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      }
      // When word deleted fully
      else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, speed]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-around h-screen px-6 md:px-20">
      {/* Text Section */}
      <section className="flex flex-col items-start justify-center text-slate-900 space-y-4 slide-left">
        <h1 className="text-xl md:text-5xl font-bold animate-slide-in-up">Hi There,</h1>
        <h1 className="text-xl md:text-5xl font-bold animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          I&apos;m Hammad Ur <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">Rehman</span>
        </h1>
        <h2 className="text-md md:text-3xl sm:text-lg font-semibold animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          I&apos;m into <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">{text}</span>
          <span className="animate-pulse">|</span>
        </h2>
        <div className="animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            spanName="animate-bounce"
            icon={faArrowDown}
            className=" bg-linear-to-r from-indigo-600 to-cyan-500
                    text-white font-semibold 
                    flex items-center gap-2 
                    rounded-full transition-transform 
                    hover:scale-105 active:scale-95
                    px-3 py-1.5 text-sm  
                    hover:text-white   /* 📱 mobile size */
                    md:px-6 md:py-4 md:text-base /* 💻 bigger screens */"
            title={"About Me"}
            onClick={function (): void {
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth", block: "start" ,});
            }}
          />
        </div>
        <ul className="flex gap-5 text-2xl py-4 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          {socialLinks.map(({ href, icon, label }, index) => (
            <li 
              key={label} 
              style={{ animationDelay: `${0.4 + index * 0.1}s` }} 
              className="animate-slide-in-up"
            >
              <a
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-indigo-500/50 active:scale-95"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />
                
                {/* Icon */}
                <FontAwesomeIcon icon={icon} className="text-lg z-10" />
                
                {/* Hover label */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-slate-900 bg-white px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Image Section */}
      <Image
        className="rounded-full shadow-lg scale-in hover:float"
        src="/myCartoon.png"
        alt="My Image"
        height={400}
        width={400}
        priority
      />
    </div>
  );
};

export default HeroSection;
