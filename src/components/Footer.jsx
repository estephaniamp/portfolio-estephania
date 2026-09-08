import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__identity">
        <strong>Estephanía Martínez</strong>
        <span>Front-End Developer</span>
      </div>

      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/estephaniamp"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>

        <a
          href="https://github.com/estephaniamp"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>

        <a href="mailto:estephaniamp@gmail.com" aria-label="Email">
          <MailIcon />
        </a>
      </div>

      <small>Diseñado y desarrollado por Estephanía Martínez · 2026</small>
    </footer>
  );
}

export default Footer;
