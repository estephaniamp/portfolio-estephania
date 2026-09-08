import {
  ArrowRightIcon,
  CodeIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons.jsx";

function Hero({ onContactOpen }) {
  return (
    <section id="inicio" className="hero section">
      <div className="hero__copy">
        <p className="eyebrow">CÓDIGO · DISEÑO · EXPERIENCIAS REALES</p>

        <h1 className="hero__title">
          Interfaces
          <br />
          que conectan
          <br />
          personas
        </h1>

        <p className="hero__text">
          Soy Front-End Developer con background en diseño. Creo experiencias
          digitales funcionales, accesibles y visualmente atractivas con React y
          JavaScript.
        </p>

        <div className="hero__actions">
          <a className="button button_dark" href="#proyectos">
            Ver proyectos <ArrowRightIcon size={17} />
          </a>

          <button className="button button_outline" onClick={onContactOpen}>
            Hablemos
          </button>
        </div>

        <div className="hero__socials" aria-label="Redes profesionales">
          <a
            href="https://github.com/estephaniamp"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon size={21} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/estephaniamp"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon size={21} /> LinkedIn
          </a>
          <a href="mailto:estephaniamp@gmail.com">
            <MailIcon size={21} /> Email
          </a>
        </div>
      </div>

      <div
        className="hero__visual"
        aria-label="Composición visual de portafolio"
      >
        <div className="hero__shape hero__shape_type_a" />
        <div className="hero__shape hero__shape_type_b" />

        <div className="hero__concept">
          DISEÑAR
          <br />
          DESARROLLAR
          <br />
          CONECTAR
        </div>

        <div className="hero__laptop">
          <div className="hero__screen">
            <span>PORTFOLIO</span>
            <strong>
              Ideas
              <br />
              en código
              <br />
              para un mundo
              <br />
              <em>más humano.</em>
            </strong>
            <CodeIcon size={30} />
          </div>
          <div className="hero__laptop-base" />
        </div>

        <p className="hero__note">
          LA TECNOLOGÍA
          <br />
          TAMBIÉN PUEDE
          <br />
          SER HUMANA
        </p>
      </div>
    </section>
  );
}

export default Hero;
