import newsHome from "../../images/news-home.png";
import newsResults from "../../images/news-results.png";
import newsSaved from "../../images/news-saved.png";
import aroundHome from "../../images/around-home.png";
import aroundEdit from "../../images/around-edit.png";
import aroundAdd from "../../images/around-add.png";

import {
  CheckIcon,
  CloseIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "./Icons.jsx";
import ProjectVisual from "./ProjectVisual.jsx";

function CaseBlock({ title, text }) {
  return (
    <section className="project-modal__block">
      <div className="project-modal__block-title">
        <CheckIcon size={19} />
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="modal project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
      >
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          <CloseIcon />
        </button>

        {project.visual === "news" ? (
          <div className="project-modal__gallery project-modal__gallery_news">
            <div className="project-modal__gallery-main">
              <img src={newsHome} alt="Pantalla principal de News Explorer" />
            </div>

            <div className="project-modal__gallery-secondary">
              <img
                src={newsResults}
                alt="Resultados de búsqueda de News Explorer"
              />

              <img src={newsSaved} alt="Artículos guardados de News Explorer" />
            </div>
          </div>
        ) : project.visual === "around" ? (
          <div className="project-modal__gallery project-modal__gallery_around">
            <div className="project-modal__gallery-main">
              <img
                src={aroundHome}
                alt="Pantalla principal de Around the U.S."
              />
            </div>

            <div className="project-modal__gallery-secondary">
              <img
                src={aroundEdit}
                alt="Edición de perfil en Around the U.S."
              />

              <img
                src={aroundAdd}
                alt="Agregar una nueva tarjeta en Around the U.S."
              />
            </div>
          </div>
        ) : (
          <div
            className={`project-modal__hero project-modal__hero_${project.accent}`}
          >
            <ProjectVisual type={project.visual} />
          </div>
        )}

        <div className="project-modal__content">
          <p className="eyebrow">CASO DE ESTUDIO · {project.number}</p>
          <h2 id={`project-title-${project.id}`}>{project.title}</h2>
          <p className="project-modal__lead">{project.subtitle}</p>

          <div className="project-modal__grid">
            <CaseBlock title="Desafío" text={project.challenge} />
            <CaseBlock title="Proceso" text={project.process} />
            <CaseBlock title="Resultado" text={project.result} />
            <CaseBlock
              title="De qué me siento orgullosa"
              text={project.proud}
            />
            <CaseBlock title="Qué mejoraría después" text={project.improve} />
          </div>

          <div className="tags project-modal__tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-modal__actions">
            <a
              className="button button_dark"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo <ExternalLinkIcon size={17} />
            </a>

            <a
              className="button button_outline"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <GitHubIcon size={17} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectModal;
