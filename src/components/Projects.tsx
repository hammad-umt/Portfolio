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
};

const Projects = () => {
  const projects = [
    {
      id:0,
      title:"Portfolio",
      techUsed: ["Next.js","Tailwind CSS","Typescript","React"],
      description:"A portfolio website built with Next.js and Tailwind CSS.",
      link:"https://github.com/hammad-umt/Portfolio"
    },
    {
      id: 1,
      title: "AI Recipe Finder",
      techUsed: ["HTML","CSS","Javascript","Flask","SQLite","Tailwind CSS", "Gemini API"],
      description:
        "A web application that empowers users to discover and generate detailed recipes based on available ingredients or dish prompts.",
      link: "https://github.com/hammad-umt/AI_Recipe_Finder",
    },
    {
      id: 2,
      title: "News App",
      techUsed: ["React", "Tailwind CSS", "NewsAPI"],
      description:
        "A responsive news app that fetches the latest articles related to Pakistan using NewsAPI.",
      link: "https://github.com/hammad-umt/News-App-Using-React",
    },
    {
      id: 3,
      title: "Quiz App",
      techUsed: ["Flutter","Dart","Firebase","Provider","Gemini API"],
      description:
        "An AI-powered quiz app where users choose a subject and get dynamically generated questions, then answer them in real-time.",
      link: "https://github.com/hammad-umt/QuizzyApp",
    },
    {
      id: 4,
      title: "Amazon Web Page Clone",
      techUsed: ["HTML", "CSS"],
      description:
        "A responsive clone of the Amazon landing page built with pure HTML and CSS. Focused on practicing layouts, media queries, and responsive design techniques.",
      link: "https://github.com/hammad-umt/Amazon-Clone-Project-Using-HTML-CSS",
    },
    {
      id:5,
      title:"Social Links",
      techUsed:["HTML","CSS"],
      description:"A social links website built with HTML and CSS.",
      link:"https://github.com/hammad-umt/Social-Links-Profile"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-3 text-left">{project.description}</p>

            <div className="mb-4">
              <span className="font-semibold text-sm text-gray-700 block mb-1">
                Tech Used:
              </span>
              <ul className="flex flex-wrap gap-2">
                {project.techUsed.map((tech, index) => (
                  <li
                    key={index}
                    className={`${techColors[tech] || "bg-[#F4B400]"} text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm`}
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
            className="inline-block mt-auto text-center bg-[#F4B400] text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-[#e0a800]"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
