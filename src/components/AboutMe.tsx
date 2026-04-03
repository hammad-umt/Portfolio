'use client';

import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Hammad_Resume.pdf";
    link.download = "Hammad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          <span className="text-white">About</span>
          <span className="bg-linear-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text"> Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="relative w-64 h-80 mx-auto">
              <Image
                className="rounded-xl object-cover w-full h-full"
                src="/MyImage.png"
                alt="Hammad's profile"
                width={300}
                height={350}
              />
              <div className="absolute inset-0 rounded-xl border border-indigo-500/30"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">I'm Hammad Ur Rehman</h3>
              <p className="text-indigo-400 text-lg">Full-Stack Developer</p>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Final-year Software Engineering student at UMT Lahore with hands-on experience in ASP.NET Core and MERN stack. I've worked at Devsinn Technologies and 10Pearls Pakistan, building scalable APIs, responsive UIs, and production-ready applications.
            </p>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Email</p>
                <p className="text-white font-semibold">hammadurrehmanse@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Location</p>
                <p className="text-white font-semibold">Lahore, Pakistan</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Phone</p>
                <p className="text-white font-semibold">+92 334 9711129</p>
              </div>
            </div>

            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
            >
              <FontAwesomeIcon icon={faFile} className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
