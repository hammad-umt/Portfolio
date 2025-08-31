"use client";

import React from "react";
import Image from "next/image";

const education = [
  {
    type: "Matric",
    school: "DHA Senior School For Boys, Lahore",
    year: "2019-2020",
    degree: "Matriculation",
    img: "/images/ssb.jpeg",
    status: "Completed",
  },
  {
    type: "Intermediate",
    school: "Aspire Group of Colleges, Lahore",
    year: "2021-2022",
    degree: "Intermediate",
    img: "/images/college.jpeg",
    status: "Completed",
  },
  {
    type: "Bachelor",
    school: "University of Management and Technology, Lahore",
    year: "2022-2026",
    degree: "Bachelor of Software Engineering",
    img: "/images/umt.jpg",
    status: "Ongoing",
  },
];

const Education = () => {
  return (
    <div className="mt-10">
      {education.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl shadow-md"
        >
          {/* Image */}
          <div className="w-32 h-32 relative flex-shrink-0">
            <Image
              src={edu.img}
              alt={edu.school}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Text Info */}
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900">{edu.type}</h2>
            <p className="text-gray-700 font-semibold">{edu.school}</p>
            <p className="text-sm text-gray-600">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                edu.status === "Completed"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {edu.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
