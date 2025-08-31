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
      <section className="flex flex-col items-start justify-center text-[#060651] space-y-4">
        <h1 className="text-xl md:text-5xl font-bold">Hi There,</h1>
        <h1 className="text-xl md:text-5xl font-bold">
          I&apos;m Hammad Ur <span className="text-[#F4B400]">Rehman</span>
        </h1>
        <h2 className="text-md md:text-3xl sm:text-lg font-semibold">
          I&apos;m into <span className="text-[#F4B400]">{text}</span>
          <span className="animate-pulse">|</span> {/* blinking cursor */}
        </h2>
        <Button
          spanName="animate-bounce"
          icon={faArrowDown}
          className=" bg-[#F4B400] 
                  text-white font-semibold 
                  flex items-center gap-2 
                  rounded-full transition-transform 
                  hover:scale-105 active:scale-95
                  px-3 py-1.5 text-sm  
                  hover:text-black   /* 📱 mobile size */
                  md:px-6 md:py-4 md:text-base /* 💻 bigger screens */"
          title={"About Me"}
          onClick={function (): void {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <ul className="flex gap-4 text-2xl text-white  py-4">
      {socialLinks.map(({ href, icon, label }) => (
        <li key={label}>
          <a
            className="hover:text-black bg-[#f4b400] p-2 rounded-full transition"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
      ))}
    </ul>
      </section>

      {/* Image Section */}
      <Image
        className="rounded-full shadow-lg"
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
