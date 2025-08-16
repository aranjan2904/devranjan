import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './sections/Hero';
import About from './pages/About';
import Projects from './sections/Projects';
// import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';
import { FiArrowUp } from 'react-icons/fi';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
