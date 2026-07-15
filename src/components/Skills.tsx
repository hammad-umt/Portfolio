"use client";

import React from "react";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: ["ASP.NET Core Web API", "C#", "Node.js", "Express.js", "Python"],
  },
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML/CSS",
    ],
  },
  {
    name: "Database",
    skills: ["SQL Server", "Entity Framework Core", "MongoDB", "SQLite"],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Visual Studio",
      "VS Code",
      "Vercel",
      "Netlify",
    ],
  },
  {
    name: "Concepts",
    skills: [
      "REST APIs",
      "JWT Authentication",
      "Repository Pattern",
      "Clean Architecture",
      "CI/CD",
    ],
  },
  {
    name: "Mobile",
    skills: ["Flutter"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 md:px-10 bg-[var(--bg-secondary)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <hr className="section-divider mb-4" />
          <h2 className="text-4xl md:text-5xl font-normal mb-3">
            Skills<span className="italic text-[var(--accent)]"> & Expertise</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              {/* Category Label */}
              <h3 className="font-[family-name:var(--font-inter)] text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.15em] mb-4">
                {category.name}
              </h3>

              {/* Skills as Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-200 select-none"
                  >
                    {skill}
                  </span>
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
