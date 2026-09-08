import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects({ onProjectOpen }) {
  return (
    <section id="proyectos" className="projects section">
      <div className="projects__heading">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="projects__title">
            Dos proyectos.
            <br />
            Dos problemas reales.
          </h2>
        </div>

        <p className="projects__intro">
          Una selección donde combino desarrollo, diseño y decisiones de UX
          para resolver necesidades concretas.
        </p>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onProjectOpen={onProjectOpen}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
