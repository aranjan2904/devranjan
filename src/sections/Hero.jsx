import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden px-6 py-24">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div variants={item}>
              <p className="text-emerald-400 font-mono mb-4">Hello, my name is</p>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              variants={item}
            >
              Abhishek <span className="text-emerald-400">Ranjan</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-gray-300 mb-8"
              variants={item}
            >
              I build <span className="text-white font-bold">digital experiences</span> that matter
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0"
              variants={item}
            >
              Full Stack Developer specializing in modern web technologies with a focus on performance, accessibility, and clean code.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              variants={item}
            >
              <Link
                to="/projects"
                className="relative px-8 py-4 bg-emerald-600 text-white font-medium rounded-lg overflow-hidden group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
              
              <Link
                to="/contact"
                className="relative px-8 py-4 border-2 border-emerald-600 text-emerald-400 font-medium rounded-lg overflow-hidden group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let's Collaborate</span>
                <span className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </motion.div>
          </div>

          {/* Visual element */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={floating}
            animate="animate"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400 font-mono">about-me.js</div>
                </div>
                
                <pre className="text-sm md:text-base text-gray-300 font-mono overflow-x-auto">
                  <code>
{`const developer = {\n  name: "Abhishek Ranjan",\n  role: "Full Stack Developer",\n  skills: [\n    "React", "Node.js", "TypeScript",\n    "MongoDB", "GraphQL", "AWS"\n  ],\n  passion: "Building scalable web apps",\n  availableForWork: true\n};`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-emerald-400 rounded-full mt-2"
            animate={{
              y: [0, 4, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;