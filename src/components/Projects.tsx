import React from "react";

const techColors: Record<string, string> = {
  HTML: "bg-orange-600 text-white",
  CSS: "bg-blue-600 text-white",
  Javascript: "bg-yellow-600 text-white",
  React: "bg-cyan-600 text-white",
  "Tailwind CSS": "bg-sky-600 text-white",
  Flask: "bg-slate-700 text-white",
  SQLite: "bg-indigo-600 text-white",
  "Gemini API": "bg-purple-600 text-white",
  Flutter: "bg-blue-500 text-white",
  Dart: "bg-sky-700 text-white",
  Firebase: "bg-amber-600 text-white",
  Provider: "bg-green-600 text-white",
  NewsAPI: "bg-red-600 text-white",
  "Next.js": "bg-slate-900 text-white",
  "Shadcn UI": "bg-emerald-600 text-white",
  TypeScript: "bg-blue-800 text-white",
  MongoDB: "bg-green-700 text-white",
  "Express.js": "bg-gray-800 text-white",
  "Node.js": "bg-green-800 text-white",
};

const projects = [
  {
    id: 0,
    title: "Umazing",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Shadcn UI"],
    description:
      "Led a full UI revamp including dynamic routing and a detailed product page to enhance navigation and overall user experience.",
    link: "https://umazing.shop/",
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
    title: "InfinetWorx",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    description:
      "Built a modern, responsive landing page for a tech company with clean design and fast performance.",
    link: "https://infinetworx.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    description:
      "Personal portfolio to showcase projects, skills, and contact info with responsive design.",
    link: "https://hammadurrehman10.netlify.app",
  },
  {
    id: 4,
    title: "AI Recipe Finder",
    techUsed: ["HTML", "CSS", "Javascript", "Flask", "SQLite", "Tailwind CSS", "Gemini API"],
    description:
      "Generates detailed recipes from ingredients using Gemini API with step-by-step instructions.",
    link: "https://github.com/hammad-umt/AI_Recipe_Finder",
  },
  {
    id:5,
    title:"Ink Well",
    techUsed:["Next.js","Tailwind CSS","TypeScript","Shadcn UI","MongoDB","Express.js","Node.js"],
    description:
      "A full-stack blogging platform with user authentication, rich text editing, and responsive design.",
    link:"https://github.com/hammad-umt/Ink-Well",
  },
  {
    id: 6,
    title: "News App",
    techUsed: ["React", "Tailwind CSS", "NewsAPI"],
    description:
      "Responsive app that fetches latest Pakistan-related articles using NewsAPI.",
    link: "https://github.com/hammad-umt/News-App-Using-React",
  },
  {
    id: 7,
    title: "Quiz App",
    techUsed: ["Flutter", "Dart", "Firebase", "Provider", "Gemini API"],
    description:
      "AI-powered quiz app with real-time scoring and dynamic questions via Gemini API.",
    link: "https://github.com/hammad-umt/QuizzyApp",
  },
  {
    id: 8,
    title: "Amazon Web Page Clone",
    techUsed: ["HTML", "CSS"],
    description:
      "Responsive clone of Amazon landing page focusing on layout and responsiveness.",
    link: "https://github.com/hammad-umt/Amazon-Clone-Project-Using-HTML-CSS",
  },
  {
    id: 9,
    title: "Social Links",
    techUsed: ["HTML", "CSS"],
    description:
      "Clean, responsive social links page demonstrating core web-design fundamentals.",
    link: "https://github.com/hammad-umt/Social-Links-Profile",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 slide-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">Projects</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          A collection of my best work showcasing modern web development, full-stack applications, and mobile solutions. Each project demonstrates my commitment to clean code and user-focused design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out h-full flex flex-col scale-in hover:scale-105"
            style={{ animation: `slideInUp 0.8s ease-out forwards`, animationDelay: `${index * 0.1}s` }}
          >
            {/* Card Header with Number */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              {String(project.id + 1).padStart(2, '0')}
            </div>

            <div className="p-8 pb-4 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="inline-block font-semibold text-slate-700 text-xs uppercase tracking-wider mb-3">Tech Stack</span>
                <ul className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech) => (
                    <li
                      key={tech}
                      className={`${techColors[tech] || "bg-gray-400"} 
                                  text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm
                                  transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>

            {/* CTA Button */}
            <div className="p-8 pt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl 
                           transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-400/50 active:scale-95 group/btn"
              >
                View Project
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
