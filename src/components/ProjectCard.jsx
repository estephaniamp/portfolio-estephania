import { ArrowRightIcon, GitHubIcon } from "./Icons.jsx";
import ProjectVisual from "./ProjectVisual.jsx";

function ProjectCard({ project, index, onProjectOpen }) {
  return (
    <article
      className={`project-card ${index % 2 ? "project-card_reverse" : ""}`}
    >
      <div className={`project-card__visual project-card__visual_${project.accent}`}>
        <ProjectVisual type={project.visual} />
      </div>

      <div className="project-card__content">
        <div className="project-card__index">
          <span>{project.number}</span>
          <i />
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <h4 className="project-card__subtitle">{project.subtitle}</h4>
        <p className="project-card__summary">{project.summary}</p>

        <div className="tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <button
            className="button button_dark"
            onClick={() => onProjectOpen(project)}
          >
            Ver caso <ArrowRightIcon size={17} />
          </button>

          <a
            className="button button_outline"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Ver código <GitHubIcon size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
