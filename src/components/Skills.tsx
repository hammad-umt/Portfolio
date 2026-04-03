"use client";
import Image from "next/image";
import React from "react";

interface SkillCategory {
  name: string;
  skills: Array<{ id: number; name: string; icon: string }>;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { id: 1, name: "React", icon: "/skills_icons/ReactJS.svg" },
      { id: 2, name: "Next.js", icon: "/skills_icons/Next.svg" },
      { id: 3, name: "TypeScript", icon: "/skills_icons/TypeScript.svg" },
      { id: 4, name: "Tailwind CSS", icon: "/skills_icons/Tailwind.svg" },
      { id: 5, name: "HTML5", icon: "/skills_icons/HTML5.svg" },
      { id: 6, name: "CSS3", icon: "/skills_icons/CSS3.svg" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { id: 7, name: "C#", icon: "/skills_icons/CSharp.svg" },
      { id: 8, name: "ASP.NET Core", icon: "/skills_icons/DotNetCore.svg" },
      { id: 9, name: "Node.js", icon: "/skills_icons/Nodejs.svg" },
      { id: 10, name: "Express", icon: "/skills_icons/Express.svg" },
      { id: 11, name: "EF Core", icon: "/skills_icons/DotNetCore.svg" },
      { id: 12, name: "SQL Server", icon: "/skills_icons/MicrosoftSqlServer.svg" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { id: 13, name: "Git", icon: "/skills_icons/Git.svg" },
      { id: 16, name: "JWT", icon: "/skills_icons/JWT.svg" },
      { id: 17, name: "Swagger", icon: "/skills_icons/Swagger.svg" },
      { id: 18, name: "MongoDB", icon: "/skills_icons/MongoDB.svg" },
    ],
  },
  {
    name: "Other",
    skills: [
      { id: 19, name: "Python", icon: "/skills_icons/python.svg" },
      { id: 20, name: "Flask", icon: "/skills_icons/Flask.svg" },
      { id: 21, name: "Flutter", icon: "/skills_icons/Flutter.svg" },
      { id: 22, name: "Firebase", icon: "/skills_icons/Firebase.svg" },
      { id: 23, name: "JavaScript", icon: "/skills_icons/Javascript.svg" },
      { id: 24, name: "Bootstrap", icon: "/skills_icons/Bootstrap.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-8 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Skills</span>
            <span className="bg-linear-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text"> & Expertise</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">Core technologies and tools I use to build modern applications</p>
        </div>

        {/* Skill Categories Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Category Label */}
                      <h3 className="font-bold text-indigo-400 mb-6 uppercase tracking-widest text-xs">
                {category.name}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="group flex flex-col items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 relative">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-300 text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
