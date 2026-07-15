"use client";

import React, { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  techUsed: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CyberSentinel",
    subtitle: "AI-Powered Cybersecurity Monitoring System",
    description:
      "End-to-end AI-powered cybersecurity monitoring system with a FastAPI backend, Flutter frontend, and Supabase. Implements a hybrid intrusion detection engine using Random Forest (CICIDS2017 dataset) alongside Isolation Forest and K-Means for anomaly detection on Windows firewall logs. Features a responsive SOC dashboard for real-time visualization of alerts, threat scores, and security analytics.",
    techUsed: ["Python", "FastAPI", "Flutter", "Supabase", "Random Forest", "K-Means"],
    featured: true,
  },
  {
    id: 2,
    title: "ClinicOS",
    subtitle: "Role-Based Clinic Management System",
    description:
      "Designed and developed a role-based clinic management system for a local clinic in Lahore using ASP.NET Core and Next.js. Implements Admin, Doctor, and Receptionist roles with dedicated dashboards and role-based permissions. Integrates RTK Query for efficient API communication and a responsive UI with Tailwind CSS v4 for patient records, appointments, and scheduling.",
    techUsed: ["ASP.NET Core", "C#", "Next.js", "TypeScript", "Tailwind CSS", "RTK Query"],
    featured: true,
  },
  {
    id: 3,
    title: "Drafidox",
    subtitle: "AI-Powered Document & Image Conversion Platform",
    description:
      "Redesigned and rebuilt the frontend of a 20+ tool SaaS platform (OCR, PDF to Word, Image to Text, File Compressor, etc.) using Next.js and TypeScript. Integrated the platform's in-house backend APIs to power core conversion workflows, handling async requests, loading, and error states. Built a consistent, reusable component system across converter, preview, and editor pages.",
    techUsed: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    liveUrl: "https://drafidox.com/",
  },
  {
    id: 4,
    title: "Eclore",
    subtitle: "Luxury Streetwear E-Commerce Platform",
    description:
      "Built and deployed a production e-commerce storefront for a luxury streetwear brand using Next.js 15, TypeScript, and Tailwind CSS, serving live customers with Cash-on-Delivery checkout. Engineered 18+ reusable React components. Optimized SEO with JSON-LD structured data, dynamic sitemap generation, and Open Graph meta tags — achieved indexed visibility on Google Search.",
    techUsed: ["Next.js 15", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://www.ecloraofficial.store/",
  },
  {
    id: 5,
    title: "Umazing",
    subtitle: "Mobile Accessories E-Commerce Storefront",
    description:
      "Developed a visually polished, mobile-first storefront UI for a mobile accessories brand. Created reusable product card, gallery, and filtering components to display 15+ SKUs across multiple categories. Designed a stock-status system and category navigation. Implemented SEO-optimized metadata and social sharing tags.",
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "https://www.umazing.shop/",
  },
  {
    id: 6,
    title: "Inkwell",
    subtitle: "Full-Stack Notes Tracking App",
    description:
      "Built full-stack notes tracking application with end-to-end CRUD using Node.js, Express.js, and MongoDB. Implemented JWT authentication, bcrypt password hashing, and RESTful API design.",
    techUsed: ["Node.js", "Express.js", "MongoDB", "Next.js", "Tailwind CSS", "JWT"],
    liveUrl: "https://inkwellnotesapp.vercel.app/",
  },
  {
    id: 7,
    title: "Job Tracker",
    subtitle: "Full-Stack Task Management System",
    description:
      "Built a production-grade Task Management API using ASP.NET Core, C#, and EF Core, with a Next.js and Shadcn UI frontend. Implemented JWT authentication, Repository Pattern, and AutoMapper for clean, maintainable architecture. Secured user data with BCrypt password hashing and role-based access control. Designed SQL Server database with EF Core migrations.",
    techUsed: ["ASP.NET Core", "C#", "EF Core", "SQL Server", "Next.js", "Shadcn UI", "JWT"],
    githubUrl: "https://github.com/hammad-umt/job-tracker-api",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const visibleOthers = showAll ? others : others.slice(0, 3);

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <hr className="section-divider mb-4" />
          <h2 className="text-4xl md:text-5xl font-normal mb-3">
            Featured<span className="italic text-[var(--accent)]"> Projects</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl">
            Production-ready applications showcasing full-stack expertise across different domains.
          </p>
        </div>

        {/* Featured Projects — Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-7 md:p-8 hover:border-[var(--accent)]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-light)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    Featured
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm mt-1 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium text-sm transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium text-sm transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="font-[family-name:var(--font-inter)] text-lg font-semibold text-[var(--text-primary)] mb-6">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleOthers.map((project) => (
              <div
                key={project.id}
                className="group bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)]/30 hover:shadow-sm transition-all duration-300"
              >
                {/* Title */}
                <h4 className="font-[family-name:var(--font-serif)] text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-1">
                  {project.title}
                </h4>
                <p className="text-[var(--text-faint)] text-xs font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techUsed.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techUsed.length > 4 && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[var(--text-faint)]">
                      +{project.techUsed.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium text-sm transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium text-sm transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Less */}
          {others.length > 3 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border)] rounded-full hover:border-[var(--accent)]/30 transition-all duration-300"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
