"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [speed, setSpeed] = useState(100);
  
  const professionList = [
    "Full-Stack Development",
    "ASP.NET Core",
    "React & Next.js",
    "Building REST APIs",
    "Clean Code",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = professionList[loopIndex % professionList.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleting) {
        setSpeed(50);
      } else {
        setSpeed(80);
      }

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, speed, professionList]);

  return (
    <section id="home" className="min-h-screen flex items-center py-24 px-6 md:px-8 bg-linear-to-br from-slate-900 via-indigo-900/30 to-slate-900">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Available Badge */}
            <div className="flex items-center gap-2 w-fit">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">Available for work</span>
            </div>

            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient">Hammad</span>
                <br />
                <span className="text-white">Ur Rehman</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                I'm into <span className="inline-block text-indigo-400 font-semibold min-w-max">{text}<span className="text-indigo-400 animate-pulse">|</span></span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              A final-year Software Engineering student building production-grade applications with expertise in full-stack development, cloud platforms, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 text-center"
              >
                View Projects
              </button>
              <a
                href="/resume/Hammad-Ur-Rehman-Resume.pdf"
                download="Hammad-Ur-Rehman-Resume.pdf"
                className="px-8 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/5 text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/hammad-umt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-indigo-600/30 hover:border-indigo-500 border border-white/20 transition-all duration-300 text-gray-300 hover:text-white"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-indigo-600/30 hover:border-indigo-500 border border-white/20 transition-all duration-300 text-gray-300 hover:text-white"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500/20 to-transparent blur-3xl"></div>
              
              {/* Profile Image */}
              <Image
                src="/myCartoon.png"
                alt="Hammad Ur Rehman"
                width={400}
                height={400}
                priority
                className="w-full h-full rounded-full object-cover border-2 border-indigo-500/30 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
