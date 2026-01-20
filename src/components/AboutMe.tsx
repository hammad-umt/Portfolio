'use client';

import { faFile, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-12 gap-12 md:gap-20 items-start border border-slate-200">
      
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <Image
          className="rounded-2xl object-cover shadow-md"
          src="/MyImage.png"
          alt="Hammad's profile picture"
          width={400}
          height={450}
        />
      </div>

      {/* About Text */}
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl text-slate-900 font-bold flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} />
          About <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">Me</span>
        </h1>

        <p className="text-2xl text-slate-900 font-bold">I&apos;m Hammad</p>
        <p className="text-lg text-slate-700 font-semibold">Software Engineer</p>

        <p className="text-slate-800 leading-relaxed">
          As a passionate Software Engineer based in Lahore, Pakistan, I enjoy
          turning ideas into functional and visually engaging solutions. My
          primary focus is frontend development with React and Next.js, while
          also exploring mobile apps using Flutter.
        </p>

        <p className="text-slate-800 leading-relaxed">
          Over time, what started as curiosity has become my full-time
          enthusiasm. I’ve worked on websites and MVPs with a strong focus on
          usability, scalability, and performance.
        </p>

        <p className="text-slate-800 leading-relaxed">
          For me, coding isn’t just a profession — it’s about solving real-world
          problems and creating products people can actually use and benefit
          from. I keep learning new technologies because innovation never stops,
          and neither do I.
        </p>

        <div className="pt-4 border-t border-slate-300 space-y-2 text-sm md:text-base">
          <p>
            <span className="text-indigo-600 font-bold">Email: </span>
            <span className="text-slate-900">hammadurrehmanse@gmail.com</span>
          </p>
          <p>
            <span className="text-indigo-600 font-bold">Place: </span>
            <span className="text-slate-900">Lahore, Pakistan - 54792</span>
          </p>
          <p>
            <span className="text-indigo-600 font-bold">Phone: </span>
            <span className="text-slate-900">+92 334-971-1129</span>
          </p>
        </div>

        <Button
  className="bg-linear-to-r from-indigo-600 to-cyan-500 text-white font-semibold flex items-center gap-2 rounded-xl hover:text-white transition-transform hover:scale-105 active:scale-95 px-3 py-1.5 text-sm md:px-6 md:py-4 md:text-base"
  title="Resume"
  icon={faFile}
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/resume/Hammad_Resume.pdf"; // path to your resume
    link.download = "Hammad_Resume.pdf";    // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
/>

      </div>
    </div>
  );
};

export default AboutMe;
