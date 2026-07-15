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
              <div className="flex-1 pb-20 last:pb-0">
                <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-[var(--border)]">
                    <div>
                      <h3 className="font-[family-name:var(--font-inter)] text-xl font-semibold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Building2 className="w-4 h-4 text-[var(--accent)]" />
                        <span className="text-[var(--accent)] font-medium text-base">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm font-medium shrink-0 bg-[var(--bg-secondary)] px-3 py-1.5 rounded-md border border-[var(--border)] w-fit">
                      <Calendar className="w-4 h-4 text-[var(--text-faint)]" />
                      <span>{exp.period}</span>
                      <span className="text-[var(--text-faint)]">|</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
 
                  {/* Bullets */}
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3.5 text-[var(--text-secondary)] text-[15px] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2.5" />
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
