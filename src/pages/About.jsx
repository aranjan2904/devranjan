import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

export default function About() {
  const skills = [
    { name: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", tech: ["Node.js", "Express", "NestJS", "Python"] },
    { name: "Database", tech: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
    { name: "DevOps", tech: ["AWS", "Docker", "CI/CD", "NGINX"] }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
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
            About <span className="text-emerald-500">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl"></div>
              <img
                src="/profile.jpg"
                alt="Abhishek Ranjan"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-emerald-500/20"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Full Stack Developer with a Passion for Problem-Solving
              </h3>
              
              <div className="prose dark:prose-invert max-w-none mb-8">
                <p>
                  Hello! I'm <strong>Abhishek Ranjan</strong>, a Full Stack Developer specializing in modern web technologies. With {new Date().getFullYear() - 2020}+ years of experience, I've helped startups and enterprises build scalable, performant web applications.
                </p>
                <p>
                  My journey began when I built my first website at 16, and since then I've been obsessed with creating digital experiences that solve real problems. I believe in writing clean, maintainable code and staying updated with industry trends.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or exploring new hiking trails.
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  My <span className="text-emerald-500">Technical Skills</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((category, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                        {category.name}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {category.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <FiFileText />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500/10 transition-colors"
                >
                  <FiMail />
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            My <span className="text-emerald-500">Journey</span>
          </h4>
          
          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-5 h-full w-0.5 bg-emerald-500/30 top-0"></div>
            
            {[
              {
                year: "2023 - Present",
                role: "Senior Full Stack Developer",
                company: "Tech Innovations Inc.",
                description: "Led development of SaaS platform serving 50K+ users. Implemented microservices architecture."
              },
              {
                year: "2021 - 2023",
                role: "Full Stack Developer",
                company: "Digital Solutions LLC",
                description: "Built e-commerce platforms with React and Node.js. Improved performance by 40%."
              },
              {
                year: "2020 - 2021",
                role: "Frontend Developer",
                company: "Web Creations",
                description: "Developed responsive UIs for client projects. Collaborated with design teams."
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-16 pb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-900 top-1"></div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-emerald-500 font-medium">{exp.year}</span>
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white mt-1 mb-2">
                    {exp.role} · {exp.company}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
