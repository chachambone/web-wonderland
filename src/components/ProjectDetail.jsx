import React, { useEffect, useState } from "react";
import { Github, Globe, Code } from "lucide-react";

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ✅ Your actual projects go here
    const projectData = [
      {
        id: 1,
        title: "Beauty Shop",
        description:
          "A full-stack e-commerce platform for beauty products with user and admin roles, JWT authentication, product browsing, cart, checkout, and invoice generation.",
        image: "/images/beauty-shop.png", // place a screenshot in /public/images
        TechStack: [
          "React",
          "Redux Toolkit",
          "Flask",
          "PostgreSQL",
          "JWT",
          "TailwindCSS",
        ],
        Features: [
          "User & Admin roles with JWT authentication",
          "Product browsing and advanced filtering",
          "Cart and secure checkout system",
          "Invoice generation",
          "Responsive UI with Tailwind",
        ],
        demoLink: "https://beautyshop-demo.vercel.app",
        githubLink: "Private",
      },
      {
        id: 2,
        title: "Hidden Gems Finder",
        description:
          "A platform to share and discover underrated food spots, with reviews, bookmarks, and map integration.",
        image: "/images/hidden-gems.png",
        TechStack: ["React", "Flask", "PostgreSQL", "Google Maps API"],
        Features: [
          "Add and review hidden food spots",
          "Bookmark favorite restaurants",
          "Interactive map with geolocation",
          "Modern UI with animations",
        ],
        demoLink: "https://hidden-gems.vercel.app",
        githubLink: "https://github.com/chachambone/hidden-gems-finder",
      },
      {
        id: 3,
        title: "Portfolio Website",
        description:
          "My official interactive portfolio featuring smooth animations, black & gold theme, and project showcase.",
        image: "/images/portfolio-v5.png",
        TechStack: ["React", "Framer Motion", "TailwindCSS", "Vite"],
        Features: [
          "Dark/Light mode toggle",
          "Animated sections with Framer Motion",
          "Downloadable CV",
          "Responsive grid layout",
          "Project showcase with stats",
        ],
        demoLink: "https://marycharity.vercel.app",
        githubLink: "https://github.com/chachambone/web-wonderland.git",
      },
    ];

    // Save to state (and localStorage for About stats)
    setProjects(projectData);
    localStorage.setItem("projects", JSON.stringify(projectData));
  }, []);

  return (
    <section className="px-[5%] lg:px-[10%] py-16 text-white" id="Portofolio">
      <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900/60 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs uppercase text-gray-500 mb-1">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.TechStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 px-2 py-1 rounded-lg text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs uppercase text-gray-500 mb-1">Features:</p>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {project.Features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-auto">
                {project.demoLink && project.demoLink !== "Private" && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-400 hover:underline"
                  >
                    <Globe className="w-4 h-4" /> Demo
                  </a>
                )}
                {project.githubLink && project.githubLink !== "Private" ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:underline"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Code className="w-4 h-4" /> Private
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
