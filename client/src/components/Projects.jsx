import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaReact, FaNode, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

const techIcons = {
  React: <FaReact />,
  Node: <FaNode />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  Tailwind: <SiTailwindcss />,
  GitHub: <FaGithub />,
  
};

const projects = [
  {
    title: "Alumverse",
    short: "Student-Alumni Connect platform",
    description:
      "A MERN-based Student-Alumni Connect platform with authentication, job posting, real-time dashboard, and admin roles.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/deep015/Alumverse",
    featured: true,
  },
  {
    title: "Students-Job Tracker",
    short: "a MERN-Based Tracker System",
    description:
      "A MERN-based Platform where the student track their jobs status.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/deep015/Student-job-tracker",
     featured: true,

  },
  {
    title: " AI Kids-stroy Generator",
    short: "Interactive AI Based kids story Genrator",
    description:
      "A modern AI-Based platform where the users can be generatr Customize story",
    tech: ["React", "Tailwind", "Gemini AI", "Neon-tech"],
    link: "https://github.com/deep015/AI-Kids-story-Generat",
    featured: true,
  },
  {
    title: "Employee Management System",
    short: "React Based System where all the CRUD's Operation can be done.",
    description:
      "Using the Tailwind, React, local Storage we implemented an simple Employee-Management System Here all the CRUD's operation can be done .",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/deep015/employee-management-system",
    featured: true,
  },
  {
    title: "Portfolio Website",
    short: "React portfolio with animations",
    description:
      "A modern portfolio site built using React, Tailwind CSS, and Framer Motion. Fully responsive with dark mode support.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/deep015/Personal-Portfolio",
    featured: true,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-300 dark:border-gray-700 cursor-pointer"
              whileHover={{ rotate: -0.5 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(proj)}
            >
              {proj.featured && (
                <div className="absolute top-3 right-3 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
                  Featured
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 group-hover:underline transition">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                  {proj.short}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 items-center">
                {proj.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {techIcons[tech] && <span className="text-lg">{techIcons[tech]}</span>}
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />

              <motion.div
                className="fixed top-1/2 left-1/2 w-[90%] sm:w-[80%] md:w-[50%] p-8 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl rounded-3xl"
                initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
                animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl transition"
                  >
                    <FaTimes />
                  </button>
                </div>

                <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                <div className="mt-4">
                  <p className="font-medium text-sm text-gray-500 mb-1">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {techIcons[tech] && <span className="text-lg">{techIcons[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow hover:shadow-lg hover:scale-105 transform transition duration-300"
                  >
                    🚀 View Code →
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
