import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, admin dashboard, and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/ecommerce-project.jpg",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://yourecommerceapp.com",
  },
  {
    title: "Task Management App",
    description: "Productivity application with real-time collaboration, drag-and-drop interface, and team features.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    image: "/task-app.jpg",
    github: "https://github.com/yourusername/task-manager",
    live: "https://yourtaskapp.com",
  },
  {
    title: "AI Content Generator",
    description: "Web application leveraging OpenAI API to generate marketing content with customizable templates.",
    tags: ["React", "Express", "OpenAI API", "JWT Auth"],
    image: "/ai-generator.jpg",
    github: "https://github.com/yourusername/ai-content-generator",
    live: "https://yourcontentgenerator.com",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setAnimateCard({ y: 50, opacity: 0 });
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 300);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works. Each project represents unique challenges and solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Web App", "Mobile", "Full Stack", "UI/UX"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          animate={animateCard}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-gray-800 hover:bg-emerald-500 hover:text-white transition-colors"
                    aria-label="GitHub repository"
                  >
                    <FiGithub size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full text-gray-800 hover:bg-emerald-500 hover:text-white transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm text-emerald-500 font-medium">
                  <FiCode className="mr-2" />
                  <span>View Case Study</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-500 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-colors">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;