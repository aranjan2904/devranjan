import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
