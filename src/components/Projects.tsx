import React from "react";
import { Github, ExternalLink } from "lucide-react";

const techColors: Record<string, string> = {
  "C#": "bg-purple-700/20 text-purple-300 border border-purple-500/30",
  "ASP.NET Core": "bg-indigo-700/20 text-indigo-300 border border-indigo-500/30",
  "EF Core": "bg-indigo-700/20 text-indigo-300 border border-indigo-500/30",
  "SQL Server": "bg-red-700/20 text-red-300 border border-red-500/30",
  JWT: "bg-amber-700/20 text-amber-300 border border-amber-500/30",
  BCrypt: "bg-slate-700/20 text-slate-300 border border-slate-500/30",
  AutoMapper: "bg-teal-700/20 text-teal-300 border border-teal-500/30",
  "GitHub Actions": "bg-gray-700/20 text-gray-300 border border-gray-500/30",
  Swagger: "bg-green-600/20 text-green-300 border border-green-500/30",
  "Next.js": "bg-slate-700/20 text-slate-300 border border-slate-500/30",
  "Tailwind CSS": "bg-sky-600/20 text-sky-300 border border-sky-500/30",
  React: "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30",
  TypeScript: "bg-blue-700/20 text-blue-300 border border-blue-500/30",
  "Shadcn UI": "bg-emerald-600/20 text-emerald-300 border border-emerald-500/30",
  HTML: "bg-orange-600/20 text-orange-300 border border-orange-500/30",
  CSS: "bg-blue-600/20 text-blue-300 border border-blue-500/30",
  Javascript: "bg-yellow-600/20 text-yellow-300 border border-yellow-500/30",
  Flask: "bg-slate-700/20 text-slate-300 border border-slate-500/30",
  SQLite: "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30",
  "Gemini API": "bg-purple-600/20 text-purple-300 border border-purple-500/30",
  Flutter: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  Dart: "bg-sky-700/20 text-sky-300 border border-sky-500/30",
  Firebase: "bg-amber-600/20 text-amber-300 border border-amber-500/30",
  "Provider": "bg-green-600/20 text-green-300 border border-green-500/30",
  NewsAPI: "bg-red-600/20 text-red-300 border border-red-500/30",
  MongoDB: "bg-green-700/20 text-green-300 border border-green-500/30",
  "Express.js": "bg-gray-800/20 text-gray-300 border border-gray-500/30",
  "Node.js": "bg-green-800/20 text-green-300 border border-green-500/30",
};

const projects = [
  {
    id: 0,
    title: "Eclore",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    description:
      "A modern web platform with seamless user experience and optimized performance.",
    link: "https://eclore.com/",
  },
  {
    id: 1,
    title: "Drafidox",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    description:
      "Optimized UI and streamlined API integrations for a smoother user journey.",
    link: "https://www.drafidox.com/",
  },
  {
    id: 2,
    title: "Ink Well",
    techUsed:["Next.js","Tailwind CSS","TypeScript","Shadcn UI","MongoDB","Express.js","Node.js"],
    description:
      "A full-stack blogging platform with user authentication, rich text editing, and responsive design.",
    link:"https://inkwellnotesapp.vercel.app/",
  },
  {
    id: 3,
    title: "Task Management API",
    techUsed: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "JWT", "BCrypt", "AutoMapper", "GitHub Actions", "Swagger"],
    description:
      "A production-ready RESTful API with JWT authentication, role-based authorization, and Swagger documentation.",
    link: "https://github.com/hammad-umt/task_management_api",
  },
  {
    id: 4,
    title: "Umazing",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Shadcn UI"],
    description:
      "Led a full UI revamp including dynamic routing and a detailed product page to enhance navigation and user experience.",
    link: "https://umazing.shop/",
  },
  {
    id: 5,
    title: "InfinetWorx",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    description:
      "Built a modern, responsive landing page for a tech company with clean design and fast performance.",
    link: "https://infinetworx.vercel.app/",
  },
  {
    id: 6,
    title: "Portfolio",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    description:
      "Personal portfolio to showcase projects, skills, and contact info with responsive design.",
    link: "https://hammadurrehman10.netlify.app",
  },
  {
    id: 7,
    title: "AI Recipe Finder",
    techUsed: ["HTML", "CSS", "Javascript", "Flask", "SQLite", "Tailwind CSS", "Gemini API"],
    description:
      "Generates detailed recipes from ingredients using Gemini API with step-by-step instructions.",
    link: "https://github.com/hammad-umt/AI_Recipe_Finder",
  },
  {
    id: 8,
    title: "News App",
    techUsed: ["React", "Tailwind CSS", "NewsAPI"],
    description:
      "Responsive app that fetches latest Pakistan-related articles using NewsAPI.",
    link: "https://github.com/hammad-umt/News-App-Using-React",
  },
  {
    id: 9,
    title: "Quiz App",
    techUsed: ["Flutter", "Dart", "Firebase", "Provider", "Gemini API"],
    description:
      "AI-powered quiz app with real-time scoring and dynamic questions via Gemini API.",
    link: "https://github.com/hammad-umt/QuizzyApp",
  },
  {
    id: 10,
    title: "Amazon Web Page Clone",
    techUsed: ["HTML", "CSS"],
    description:
      "Responsive clone of Amazon landing page focusing on layout and responsiveness.",
    link: "https://github.com/hammad-umt/Amazon-Clone-Project-Using-HTML-CSS",
  },
  {
    id: 11,
    title: "Social Links",
    techUsed: ["HTML", "CSS"],
    description:
      "Clean, responsive social links page demonstrating core web-design fundamentals.",
    link: "https://github.com/hammad-umt/Social-Links-Profile",
  },
];

const Projects = () => {
  // Featured projects - displayed prominently
  const featured = [
    projects.find(p => p.title === "Drafidox"),
    projects.find(p => p.title === "Ink Well"),
  ].filter(Boolean);

  // Other projects (excluding Task Management API, Drafidox, and Ink Well)
  const others = projects.filter(
    p => p.title !== "Drafidox" && p.title !== "Ink Well" && p.title !== "Eclore"
  ).slice(0, 9);

  return (
    <section id="projects" className="py-24 px-6 md:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Featured</span>
            <span className="bg-linear-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text"> Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Production-ready applications showcasing full-stack expertise.</p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {featured.map((project) => (
            <div key={project?.id} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all group">
              <div className="space-y-6">
                <div>
                  <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">Featured</span>
                  <h3 className="text-3xl font-bold text-white mt-2 group-hover:text-indigo-400 transition-colors">{project?.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-base">{project?.description}</p>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project?.techUsed.map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[tech] || "bg-slate-700/20 text-slate-300 border border-slate-500/30"}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project?.link} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm pt-4">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.map((project, index) => (
          <div key={project.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techUsed.map((tech) => (
                <span key={tech} className={`px-2 py-1 rounded-full text-xs font-medium ${techColors[tech] || "bg-slate-700/20 text-slate-300 border border-slate-500/30"}`}>
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm">
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            )}
          </div>
        ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
