"use client";

import React from "react";

const education = [
  {
    type: "Matric",
    school: "DHA Senior School For Boys",
    year: "2019-2020",
    degree: "Matriculation",
    status: "Completed",
  },
  {
    type: "Intermediate",
    school: "Aspire Group of Colleges",
    year: "2021-2022",
    degree: "Higher Secondary Certificate",
    status: "Completed",
  },
  {
    type: "Bachelor",
    school: "University of Management and Technology",
    year: "2022-2026",
    degree: "Bachelor of Software Engineering",
    status: "Ongoing",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          <span className="text-white">Education &</span>
          <span className="bg-linear-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text"> Certifications</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative flex gap-6 pb-8"
            >
              {/* Timeline Line */}
              <div className="absolute left-5 top-12 bottom-0 w-px bg-linear-to-b from-indigo-500 to-blue-600"></div>

              {/* Timeline Dot */}
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-indigo-600 border-4 border-slate-950 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.type}</h3>
                    <p className="text-indigo-400 font-semibold mt-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm mt-2">{edu.degree}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold shrink-0 ${
                      edu.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
