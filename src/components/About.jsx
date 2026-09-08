import aboutImage from "../../images/estephania-about.jpg";

import { CodeIcon, PaletteIcon, SparklesIcon, UsersIcon } from "./Icons.jsx";

function Value({ icon, title }) {
  return (
    <div className="about__value">
      <span>{icon}</span>
      <strong>{title}</strong>
    </div>
  );
}

function TimelineItem({ year, title, text }) {
  return (
    <div className="about__timeline-item">
      <span className="about__timeline-year">{year}</span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="about__skill-group">
      <h4>{title}</h4>
      <div className="tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="about section">
      <div className="about__top">
        <div className="about__portrait">
          <img
            className="about__image"
            src={aboutImage}
            alt="Estephanía Martínez, Front-End Developer"
          />

          <div className="about__badge">
            CÓDIGO
            <br />
            DISEÑO
            <br />
            IDEAS
            <br />
            PERSONAS
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow">SOBRE MÍ</p>

          <h2 className="about__title">
            Hola, soy
            <br />
            Estephanía
          </h2>

          <h3>Front-End Developer con background en diseño.</h3>

          <p>
            Mi trayectoria comenzó en Diseño Gráfico Multimedia y comunicación
            visual. Después de varios años trabajando con proyectos editoriales,
            producción y equipos internacionales, decidí llevar esa experiencia
            al desarrollo web.
          </p>

          <p>
            Hoy combino ambas disciplinas para construir productos digitales
            donde código, usabilidad y diseño trabajen juntos.
          </p>

          <div className="about__values">
            <Value icon={<PaletteIcon />} title="Pensamiento visual" />
            <Value icon={<CodeIcon />} title="Solución de problemas" />
            <Value icon={<UsersIcon />} title="Trabajo colaborativo" />
            <Value icon={<SparklesIcon />} title="Aprendizaje continuo" />
          </div>
        </div>
      </div>

      <div className="about__grid">
        <div className="about__timeline-card">
          <p className="eyebrow">MI CAMINO</p>

          <div className="about__timeline">
            <TimelineItem
              year="2026"
              title="Web Developer"
              text="TripleTen Bootcamp · React, JavaScript, APIs y desarrollo web."
            />
            <TimelineItem
              year="2023–2026"
              title="Editora"
              text="Instituto de Estudios Constitucionales · proyectos editoriales complejos y coediciones institucionales."
            />
            <TimelineItem
              year="2021–2023"
              title="Team Leader"
              text="Schawk! · liderazgo de equipo y colaboración internacional para Johnson & Johnson."
            />
            <TimelineItem
              year="2009–2012"
              title="Diseño Gráfico Multimedia"
              text="Universidad Mondragón."
            />
          </div>
        </div>

        <div className="about__skills-card">
          <p className="eyebrow">TECNOLOGÍAS Y HERRAMIENTAS</p>

          <SkillGroup
            title="Front-End"
            items={[
              "React",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Responsive Design",
            ]}
          />

          <SkillGroup
            title="Herramientas"
            items={["Git", "GitHub", "Vite", "Figma", "Adobe Creative Suite"]}
          />

          <SkillGroup
            title="Conocimientos Back-End"
            items={["Node.js", "Express", "MongoDB"]}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
