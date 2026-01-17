"use client";
import Image from "next/image";
import React from "react";

const skills = [
  // 🌐 Web Development
  { id: 1, name: "HTML5", icon: "/skills_icons/HTML5.svg" },
  { id: 2, name: "CSS3", icon: "/skills_icons/CSS3.svg" },
  { id: 3, name: "Javascript", icon: "/skills_icons/Javascript.svg" },
  { id: 4, name: "React", icon: "/skills_icons/ReactJS.svg" },
  { id: 5, name: "Next.js", icon: "/skills_icons/Next.svg" },
  {id: 6, name: "TypeScript", icon: "/skills_icons/TypeScript.svg" },
  {id: 7, name: "Express", icon: "/skills_icons/Express.svg" },
  {id: 8, name: "MongoDB", icon: "/skills_icons/MongoDB.svg" },
  { id: 9, name: "Node.js", icon: "/skills_icons/NodeJS.svg" },
  { id: 10, name: "Tailwind CSS", icon: "/skills_icons/Tailwind.svg" },
  { id: 11, name: "Bootstrap", icon: "/skills_icons/Bootstrap.svg" },

  // 🐍 Python & Data Science
  { id: 12, name: "Python", icon: "/skills_icons/python.svg" },
  { id: 13, name: "Pandas", icon: "/skills_icons/Pandas.svg" },
  { id: 14, name: "Numpy", icon: "/skills_icons/Numpy.svg" },
  { id: 15, name: "Matplotlib", icon: "/skills_icons/Matplotlib.svg" },
  { id: 16, name: "Flask", icon: "/skills_icons/Flask.svg" },
  { id: 17, name: "SQLite", icon: "/skills_icons/SQLite.svg" },

  // 📱 Mobile
  { id: 18, name: "Flutter", icon: "/skills_icons/Flutter.svg" },
  { id: 19, name: "Dart", icon: "/skills_icons/Dart.svg" },
  { id: 20, name: "Firebase", icon: "/skills_icons/Firebase.svg" },

  // ⚙️ Tools
  { id: 21, name: "GitHub", icon: "/skills_icons/Github.svg" },
  { id: 22, name: "Git", icon: "/skills_icons/Git.svg" },
  { id: 23, name: "Netlify", icon: "/skills_icons/Netlify.svg" },

  // 💻 Other
  { id: 24, name: "C++", icon: "/skills_icons/C++.svg" },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-cyan-50 to-slate-50 p-10 rounded-2xl shadow-xl border border-indigo-100">
      {/* Heading */}
      <h1 className="text-center text-4xl font-extrabold text-slate-900">
        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Abilities</span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 pt-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-100 p-5"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={60}
              height={60}
              className="mb-3"
            />
            <p className="font-semibold text-lg text-slate-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
