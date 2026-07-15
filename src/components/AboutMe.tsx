"use client";

import Image from "next/image";
import React from "react";

const stats = [
  { label: "Internships", value: "2" },
  { label: "Projects", value: "7+" },
  { label: "Technologies", value: "15+" },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <hr className="section-divider mb-4" />
          <h2 className="text-4xl md:text-5xl font-normal">
            About<span className="italic text-[var(--accent)]"> Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="relative w-56 h-68 sm:w-64 sm:h-80 mx-auto lg:mx-0">
              <Image
                className="rounded-xl object-cover w-full h-full shadow-md"
                src="/MyImage.png"
                alt="Hammad Ur Rehman"
                width={280}
                height={340}
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-[family-name:var(--font-inter)] text-xl font-semibold text-[var(--text-primary)] mb-1">
                Hammad Ur Rehman
              </h3>
              <p className="text-[var(--accent)] font-medium">
                Full Stack Developer
              </p>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              Software Engineering graduate from the University of Management and Technology (UMT), Lahore, with hands-on internship experience at 10Pearls Pakistan and Devsinn Technologies. I specialize in building production-ready RESTful APIs with ASP.NET Core, full-stack applications with the MERN stack, and performant frontends with Next.js. I&apos;m passionate about clean, scalable code and have a growing focus on AI-driven applications.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 pt-2">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="pt-4 border-t border-[var(--border)] space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="text-xs text-[var(--text-faint)] uppercase tracking-widest w-16">
                  Email
                </span>
                <a
                  href="mailto:hammadurrehmanse@gmail.com"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-sm"
                >
                  hammadurrehmanse@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[var(--text-faint)] uppercase tracking-widest w-16">
                  Phone
                </span>
                <a
                  href="tel:+923349711129"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-sm"
                >
                  +92 334 971 1129
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[var(--text-faint)] uppercase tracking-widest w-16">
                  Based
                </span>
                <span className="text-[var(--text-secondary)] text-sm">
                  Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
