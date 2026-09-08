import { useState } from "react";
import {
  ArrowRightIcon,
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons.jsx";

function ContactModal({ onClose }) {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:estephaniamp@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;

    setStatus("Se abrió tu aplicación de correo para completar el envío.");
  };

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          <CloseIcon />
        </button>

        <div className="contact-modal__intro">
          <p className="eyebrow">HABLEMOS</p>

          <h2 id="contact-title">
            ¿Construimos
            <br />
            algo juntos?
          </h2>

          <p>
            Estoy abierta a nuevas oportunidades, colaboraciones y buenas
            conversaciones sobre tecnología, diseño y producto digital.
          </p>

          <div className="contact-modal__links">
            <a href="mailto:estephaniamp@gmail.com">
              <MailIcon /> estephaniamp@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/estephaniamp"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon /> linkedin.com/in/estephaniamp
            </a>

            <a
              href="https://github.com/estephaniamp"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon /> github.com/estephaniamp
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-modal__form">
          <label>
            Nombre
            <input name="name" required placeholder="Tu nombre" />
          </label>

          <label>
            Correo electrónico
            <input
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
            />
          </label>

          <label>
            Asunto
            <select name="subject" required defaultValue="">
              <option value="" disabled>
                Selecciona un asunto
              </option>
              <option value="Oportunidad laboral">Oportunidad laboral</option>
              <option value="Colaboración">Colaboración</option>
              <option value="Proyecto freelance">Proyecto freelance</option>
              <option value="Otro">Otro</option>
            </select>
          </label>

          <label>
            Mensaje
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Cuéntame un poco más..."
            />
          </label>

          <button className="button button_dark" type="submit">
            Enviar mensaje <ArrowRightIcon size={17} />
          </button>

          <p className="contact-modal__status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
