"use client";

import React from "react";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "10Pearls Pakistan",
    role: "MERN Stack Developer Intern",
    period: "Sep 2025 – Dec 2025",
    location: "Lahore",
    bullets: [
      "Developed a full-stack MERN application with 5+ core modules serving real client requirements",
      "Integrated 10+ RESTful API endpoints using Node.js and Express.js connected to MongoDB",
      "Reduced bug count by 30% through systematic testing, debugging, and peer code reviews",
      "Collaborated with a cross-functional team using Git workflows and agile development practices",
    ],
  },
  {
    company: "Devsinn Technologies",
    role: "Next.js Developer Intern",
    period: "Aug 2025 – Sep 2025",
    location: "Lahore",
    bullets: [
      "Worked on 4+ real client projects, building responsive frontends using Next.js and Tailwind CSS",
      "Integrated REST APIs and optimized frontend performance for client-facing applications",
      "Delivered UI improvements that went live in production within the internship period",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 md:py-36 px-6 md:px-10 bg-[var(--bg-secondary)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <hr className="section-divider mb-4" />
          <h2 className="text-4xl md:text-5xl font-normal">
            Work<span className="italic text-[var(--accent)]"> Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10">
              {/* Timeline Track */}
              <div className="flex flex-col items-center shrink-0">
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] border-[3px] border-[var(--bg-secondary)] ring-2 ring-[var(--accent)]/30 mt-2" />
                {/* Line */}
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--border-strong)]" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 pb-12 last:pb-0">
                <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-inter)] text-lg font-semibold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span className="text-[var(--accent)] font-medium text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--text-faint)] text-xs font-medium shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                      <span className="mx-1">·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
