import newsHome from "../../images/news-home.png";
import aroundHome from "../../images/around-home.png";

function ProjectVisual({ type }) {
  if (type === "news") {
    return (
      <div className="project-visual__news">
        <div className="project-visual__browser">
          <div className="project-visual__browser-bar">
            <span />
            <span />
            <span />
          </div>

          <img
            className="project-visual__news-main"
            src={newsHome}
            alt="Pantalla principal de News Explorer"
          />
        </div>
      </div>
    );
  }

  if (type === "around") {
    return (
      <div className="project-visual__around">
        <div className="project-visual__browser">
          <div className="project-visual__browser-bar">
            <span />
            <span />
            <span />
          </div>

          <img
            className="project-visual__around-main"
            src={aroundHome}
            alt="Pantalla principal de Around the U.S."
          />
        </div>
      </div>
    );
  }

  return null;
}

export default ProjectVisual;
