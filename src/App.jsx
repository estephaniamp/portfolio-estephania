import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import ContactCTA from "./components/ContactCTA.jsx";
import Footer from "./components/Footer.jsx";
import ContactModal from "./components/ContactModal.jsx";
import ProjectModal from "./components/ProjectModal.jsx";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") {
        setContactOpen(false);
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      contactOpen || activeProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [contactOpen, activeProject]);

  return (
    <div className="page">
      <Header onContactOpen={() => setContactOpen(true)} />

      <main>
        <Hero onContactOpen={() => setContactOpen(true)} />
        <Projects onProjectOpen={setActiveProject} />
        <About />
        <ContactCTA onContactOpen={() => setContactOpen(true)} />
      </main>

      <Footer />

      {contactOpen && (
        <ContactModal onClose={() => setContactOpen(false)} />
      )}

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

export default App;
