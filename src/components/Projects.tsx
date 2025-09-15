import React from "react";

const techColors: Record<string, string> = {
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
  Javascript: "bg-yellow-500 text-black",
  React: "bg-cyan-500",
  "Tailwind CSS": "bg-sky-400",
  Flask: "bg-gray-700",
  SQLite: "bg-indigo-500",
  "Gemini API": "bg-purple-500",
  Flutter: "bg-blue-400",
  Dart: "bg-sky-600",
  Firebase: "bg-amber-500",
  Provider: "bg-green-500",
  NewsAPI: "bg-red-500",
  "Next.js": "bg-purple-500",
  "Shadcn UI": "bg-emerald-500",
  TypeScript: "bg-blue-700",
};

const projects = [
  {
    id: 0,
    title: "Umazing",
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Shadcn UI"],
    description:
      "Led a full UI revamp including dynamic routing and a detailed product page to enhance navigation and overall user experience.",
    link: "https://umazing-six.vercel.app/",
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
    id: 5,
    title: "News App",
    techUsed: ["React", "Tailwind CSS", "NewsAPI"],
    description:
      "Responsive app that fetches latest Pakistan-related articles using NewsAPI.",
    link: "https://github.com/hammad-umt/News-App-Using-React",
  },
  {
    id: 6,
    title: "Quiz App",
    techUsed: ["Flutter", "Dart", "Firebase", "Provider", "Gemini API"],
    description:
      "AI-powered quiz app with real-time scoring and dynamic questions via Gemini API.",
    link: "https://github.com/hammad-umt/QuizzyApp",
  },
  {
    id: 7,
    title: "Amazon Web Page Clone",
    techUsed: ["HTML", "CSS"],
    description:
      "Responsive clone of Amazon landing page focusing on layout and responsiveness.",
    link: "https://github.com/hammad-umt/Amazon-Clone-Project-Using-HTML-CSS",
  },
  {
    id: 8,
    title: "Social Links",
    techUsed: ["HTML", "CSS"],
    description:
      "Clean, responsive social links page demonstrating core web-design fundamentals.",
    link: "https://github.com/hammad-umt/Social-Links-Profile",
  },
];

const Projects = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gradient-to-b from-gray-50 to-white">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 flex flex-col justify-between
                     transition-transform duration-500 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-white"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              {project.title}
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-4">
              <span className="font-semibold text-gray-700 text-sm block mb-2">
                Tech Stack
              </span>
              <ul className="flex flex-wrap gap-3">
                {project.techUsed.map((tech) => (
                  <li
                    key={tech}
                    className={`${techColors[tech] || "bg-gray-400"} 
                                text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm
                                transition-transform duration-300 transform hover:scale-110 hover:shadow-md`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-center bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg 
                       transition-transform transform hover:scale-105 hover:bg-yellow-600 hover:ring-2 hover:ring-yellow-400"
          >
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
