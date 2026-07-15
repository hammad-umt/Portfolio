"use client";

import React from "react";
import { GraduationCap, Award } from "lucide-react";

const certificates = [
  "Microsoft Full-Stack Developer Professional Certificate",
  "Programming with JavaScript",
  "Introduction to Frontend Development",
  "Python Basics",
  "Version Control",
  "Python Classes & Inheritance",
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <hr className="section-divider mb-4" />
          <h2 className="text-4xl md:text-5xl font-normal">
            Education<span className="italic text-[var(--accent)]"> & Certificates</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="font-[family-name:var(--font-inter)] text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                Education
              </h3>
            </div>

            <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-[family-name:var(--font-serif)] text-xl text-[var(--text-primary)]">
                    Bachelor of Science
                  </h4>
                  <p className="text-[var(--accent)] font-medium text-sm mt-1">
                    Software Engineering
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm mt-2">
                    University of Management and Technology (UMT)
                  </p>
                  <p className="text-[var(--text-faint)] text-sm mt-1">
                    Lahore, Pakistan
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/20">
                    2022 – 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Award className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="font-[family-name:var(--font-inter)] text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                Certificates
              </h3>
            </div>

            <div className="space-y-2.5">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg px-5 py-3.5 hover:border-[var(--accent)]/30 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                  <span className="text-[var(--text-secondary)] text-sm font-medium">
                    {cert}
                  </span>
                </div>
              ))}
              <p className="text-[var(--text-faint)] text-xs mt-3 pl-1">
                Via Coursera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
